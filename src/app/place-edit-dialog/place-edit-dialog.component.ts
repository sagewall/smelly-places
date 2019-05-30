import { Component, Inject, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { GeoJson } from '../geo-json';
import { MapService } from '../map.service';
import { PlaceDeleteDialogComponent } from '../place-delete-dialog/place-delete-dialog.component';

@Component({
  selector: 'app-place-edit-dialog',
  templateUrl: './place-edit-dialog.component.html',
  styleUrls: ['./place-edit-dialog.component.scss']
})
export class PlaceEditDialogComponent implements OnInit {

  displayName: string;
  email: string;
  feature: GeoJson;
  name: string;
  smell: string;
  uid: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public placeDeleteDialog: MatDialog,
    private mapService: MapService,
    private afAuth: AngularFireAuth
  ) { }

  ngOnInit() {
    if (this.afAuth.auth.currentUser) {
      this.displayName = this.afAuth.auth.currentUser.displayName;
      this.email = this.afAuth.auth.currentUser.email;
      this.uid = this.afAuth.auth.currentUser.uid;
    } else {
      this.displayName = '';
      this.email = '';
      this.uid = '';
    }

    if (this.data.feature) {
      this.name = this.data.feature.properties.name;
      this.smell = this.data.feature.properties.smell;

      this.feature = new GeoJson(this.data.coordinates, {
        id: this.data.feature.properties.id,
        uid: this.uid,
        name: this.name,
        smell: this.smell,
        displayName: this.displayName,
        email: this.email,
        modified: true,
        modifiedOn: new Date()
      });
    } else {
      this.feature = new GeoJson(this.data.coordinates, {
        uid: this.uid,
        displayName: this.displayName,
        email: this.email,
        modified: false,
        modifiedOn: new Date()
      });
    }
  }

  savePlace() {
    this.feature.properties.name = this.name;
    this.feature.properties.smell = this.smell;

    if (this.feature.properties.modified) {
      this.mapService.updateFeature(this.feature as GeoJson);
    } else {
      this.mapService.createFeature(this.feature as GeoJson);
    }
  }

  deletePlace() {
    this.placeDeleteDialog.open(PlaceDeleteDialogComponent, {
      data: this.feature as GeoJson
    });
  }

}
