import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import * as mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GeoJson } from './geo-json';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  currentPosition: mapboxgl.LanLat;
  center: mapboxgl.LanLat;
  zoom: number;
  private featureCollection: AngularFirestoreCollection<GeoJson>;

  get features(): Observable<GeoJson[]> {
    return this.featureCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as GeoJson;
          data.properties.id = a.payload.doc.id;
          return data;
        });
      }));
  }

  constructor(private db: AngularFirestore) {
    this.featureCollection = this.db.collection<GeoJson>('features');
  }

  createFeature(feature: GeoJson) {
    const data = { ...feature };
    return this.db.collection<GeoJson>('features').add(data).then(docRef => {
      const id = docRef.id;
      data.properties.id = id;
      this.updateFeature(data);
    });
  }

  updateFeature(feature: GeoJson) {
    const data = { ...feature };
    const id = data.properties.id;
    return this.db.doc<GeoJson>(`features/${id}`).update(data);
  }

  deleteFeature(feature: GeoJson) {
    const data = { ...feature };
    const id = data.properties.id;
    return this.db.doc<GeoJson>(`features/${id}`).delete();
  }

  getFeaturesByUser(uid: string) {
    return this.db.collection<GeoJson>('features', ref => ref.where('properties.uid', '==', uid).orderBy('properties.name'));
  }
}
