import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { AngularFireAuth } from 'angularfire2/auth';
import { GeoJson } from '../geo-json';
import { MapService } from '../map.service';

@Component({
  selector: 'app-place-edit',
  templateUrl: './place-edit.component.html',
  styleUrls: ['./place-edit.component.sass']
})
export class PlaceEditComponent implements OnInit {
  feature: GeoJson;
  name: string;
  smell: string;
  displayName: string;
  email: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private mapService: MapService,
    private afAuth: AngularFireAuth
  ) { }

  ngOnInit() {
    if (this.afAuth.auth.currentUser) {
      this.displayName = this.afAuth.auth.currentUser.displayName;
      this.email = this.afAuth.auth.currentUser.email;
    } else {
      this.displayName = '';
      this.email = '';
    }

    if (this.data.feature) {
      this.mapService.addToHistory(this.data.feature);

      this.name = this.data.feature.properties.name;
      this.smell = this.data.feature.properties.smell;

      this.feature = new GeoJson(this.data.coordinates, {
        id: this.data.feature.properties.id,
        name: this.name,
        smell: this.smell,
        displayName: this.displayName,
        email: this.email,
        modified: true,
        modifiedOn: new Date()
      });
    } else {
      this.feature = new GeoJson(this.data.coordinates, {
        displayName: this.displayName,
        email: this.email,
        modified: false,
        modifiedOn: new Date()
      });
    }
  }

  savePlace() {
    this.feature.properties.name = this.toTitleCase(this.name);
    this.feature.properties.smell = this.toTitleCase(this.smell);

    if (this.feature.properties.modified) {
      this.mapService.updateFeature(<GeoJson>this.feature);
    } else {
      this.mapService.createFeature(<GeoJson>this.feature);
    }
  }

  deletePlace() {
    this.mapService.deleteFeature(<GeoJson>this.feature);
  }

  private toTitleCase(input: string) {
    return input.replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
    );
  }
}
