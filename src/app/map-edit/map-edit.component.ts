import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import * as mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
import { environment } from '../../environments/environment';
import { FeatureCollection, GeoJson } from '../geo-json';
import { MapService } from '../map.service';

@Component({
  selector: 'app-map-edit',
  templateUrl: './map-edit.component.html',
  styleUrls: ['./map-edit.component.sass']
})
export class MapEditComponent implements OnInit {
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
  private source: any;
  private markers: any;

  constructor(private mapService: MapService) {
    mapboxgl.accessToken = environment.mapbox.accessToken;
    this.style = environment.mapbox.style;
    this.longitude = -105.1;
    this.latitude = 39.75;
    this.zoom = 10;
  }

  ngOnInit() {
    this.createMap();
  }

  private createMap() {

    this.markers = this.mapService.getMarkers();

    this.map = new mapboxgl.Map({
      container: this.mapCanvasNativeElement,
      style: this.style,
      center: [this.longitude, this.latitude],
      zoom: this.zoom
    });

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.longitude = position.coords.longitude;
        this.latitude = position.coords.latitude;
        this.map.flyTo({
          center: [this.longitude, this.latitude]
        });
      });
    }

    this.map.addControl(new MapboxGeocoder({
      accessToken: mapboxgl.accessToken
    }));

    this.map.on('load', () => {
      this.map.addSource('firebase', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: []
        }
      });

      this.source = this.map.getSource('firebase');

      this.markers.subscribe(markers => {
        const data = new FeatureCollection(markers);
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

    this.map.on('click', (event) => {
      const coordinates = [event.lngLat.lng, event.lngLat.lat];
      const newMarker = new GeoJson(coordinates, {
        name: 'test name',
        smell: 'test smell',
      });
      this.mapService.createMarker(<GeoJson>newMarker);
    });

    this.map.on('click', 'firebase', (event) => {
      console.log(event.features[0]);
    });

  }

}
