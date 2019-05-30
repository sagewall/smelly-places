import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import * as mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { FeatureCollection, GeoJson } from '../geo-json';
import { MapService } from '../map.service';
import { PlaceEditDialogComponent } from '../place-edit-dialog/place-edit-dialog.component';

@Component({
  selector: 'app-map-edit',
  templateUrl: './map-edit.component.html',
  styleUrls: ['./map-edit.component.scss']
})
export class MapEditComponent implements OnInit, OnDestroy {
  @ViewChild('mapCanvas', { static: true })
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

  constructor(
    private mapService: MapService,
    public placeEditDialog: MatDialog
  ) {
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

    this.map.addControl(new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl
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

    this.map.on('click', (event) => {
      const bbox = [[event.point.x - 5, event.point.y - 5], [event.point.x + 5, event.point.y + 5]];
      const features = this.map.queryRenderedFeatures(bbox, { layers: ['firebase'] });

      if (features.length > 0) {
        this.placeEditDialog.open(PlaceEditDialogComponent, {
          data: {
            feature: features[0],
            coordinates: features[0].geometry.coordinates
          }
        });
      } else {
        this.placeEditDialog.open(PlaceEditDialogComponent, {
          data: {
            coordinates: [event.lngLat.lng, event.lngLat.lat]
          }
        });
      }
    });
  }

  ngOnDestroy() {
    this.mapService.center = this.map.getCenter();
    this.mapService.zoom = this.map.getZoom();
  }
}
