import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { GeoJson } from './geo-json';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private db: AngularFirestore) { }

  getMarkers(): Observable<GeoJson[]> {
    return this.db.collection<GeoJson>('features').valueChanges();
  }

  createMarker(feature: GeoJson) {
    const data = JSON.parse(JSON.stringify(feature));
    return this.db.collection<GeoJson>('features').add(data);
  }
}
