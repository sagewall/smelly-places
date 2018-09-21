import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import * as mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { FeatureCollection, GeoJson } from '../geo-json';
import { MapService } from '../map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.sass']
})
export class MapComponent implements OnInit, OnDestroy {
  @ViewChild('mapCanvas')
  private mapCanvasElementRef: ElementRef;

  private get mapCanvasNativeElement(): HTMLElement {
    return this.mapCanvasElementRef.nativeElement;
  }

  private map: mapboxgl.Map;
  private style: string;
  private longitude: number;
  private latitude: number;
  private zoom: number;
  private source: mapboxgl.source;
  private features$: Observable<GeoJson[]>;

  constructor(private mapService: MapService) {
    mapboxgl.accessToken = environment.mapbox.accessToken;
    this.style = environment.mapbox.style;
    this.longitude = -105.1;
    this.latitude = 39.75;
    this.zoom = 10;
  }

  ngOnInit() {
    if (this.mapService.center) {
      this.longitude = this.mapService.center.lng;
      this.latitude = this.mapService.center.lat;
    }

    if (this.mapService.zoom) {
      this.zoom = this.mapService.zoom;
    }

    this.createMap();
  }

  private createMap() {

    this.features$ = this.mapService.features;

    this.map = new mapboxgl.Map({
      container: this.mapCanvasNativeElement,
      style: this.style,
      center: [this.longitude, this.latitude],
      zoom: this.zoom
    });

    if (navigator.geolocation && !this.mapService.currentPosition) {
      navigator.geolocation.getCurrentPosition(position => {
        this.mapService.currentPosition = new mapboxgl.LngLat(position.coords.longitude, position.coords.latitude);
        this.longitude = position.coords.longitude;
        this.latitude = position.coords.latitude;
        this.map.flyTo({
          center: [this.longitude, this.latitude]
        });
      });
    }

    this.map.addControl(new MapboxGeocoder({
      accessToken: mapboxgl.accessToken
    }), 'top-left');

    this.map.addControl(new mapboxgl.GeolocateControl(), 'top-left');

    this.map.on('load', () => {
      this.map.addSource('firebase', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: []
        }
      });

      this.source = this.map.getSource('firebase');

      this.features$.subscribe(features => {
        const data = new FeatureCollection(features);
        this.source.setData(data);
      });

      this.map.addLayer({
        id: 'firebase',
        source: 'firebase',
        type: 'symbol',
        layout: {
          'text-field': '{smell}',
          'text-font': ['Open Sans ExtraBold Italic'],
          'text-size': 24
        },
        paint: {
          'text-color': '#710f0f'
        }
      });
    });

    this.map.on('mouseenter', 'firebase', () => this.map.getCanvas().style.cursor = 'pointer');

    this.map.on('mouseleave', 'firebase', () => this.map.getCanvas().style.cursor = '');

    this.map.on('click', 'firebase', (event) => {
      const feature = event.features[0];
      const descriptionHTML = `
        <h3>${feature.properties.name}</h3>
        <p>${feature.properties.name} smells like ${feature.properties.smell.toLowerCase()}.</p>
        <p>- ${feature.properties.displayName}</p>
      `;

      new mapboxgl.Popup()
        .setLngLat(feature.geometry.coordinates)
        .setHTML(descriptionHTML)
        .addTo(this.map);
    });
  }

  ngOnDestroy() {
    this.mapService.center = this.map.getCenter();
    this.mapService.zoom = this.map.getZoom();
  }
}
