import { Component, Inject, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { GeoJson } from '../geo-json';
import { MapService } from '../map.service';

@Component({
  selector: 'app-profile-delete-dialog',
  templateUrl: './profile-delete-dialog.component.html',
  styleUrls: ['./profile-delete-dialog.component.scss']
})
export class ProfileDeleteDialogComponent implements OnInit {

  public dialog: MatDialog;
  public places: GeoJson[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private afAuth: AngularFireAuth,
    private mapService: MapService,
    private router: Router
  ) { }

  ngOnInit() {
    this.places = this.data;
  }

  deleteProfile() {
    this.places.forEach(place => this.mapService.deleteFeature(place));

    this.afAuth.auth.currentUser.delete()
      .then(() => this.router.navigate(['/home']))
      .catch((error) => console.log(error));
  }

}
