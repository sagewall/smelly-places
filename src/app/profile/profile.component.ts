import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { GeoJson } from '../geo-json';
import { MapService } from '../map.service';
import { PlaceDeleteDialogComponent } from '../place-delete-dialog/place-delete-dialog.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  currentUser: firebase.User;
  places$: Observable<GeoJson[]>;

  constructor(
    public placeDeleteDialog: MatDialog,
    private mapService: MapService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: { currentUser: firebase.User }) => {
        this.currentUser = data.currentUser;
      });

    this.places$ = this.mapService.getFeaturesByUser(this.currentUser.uid).valueChanges();
  }

  deletePlace(place: GeoJson) {
    this.placeDeleteDialog.open(PlaceDeleteDialogComponent, {
      data: place
    });
  }

}
