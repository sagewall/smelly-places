import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { GeoJson } from '../geo-json';
import { MapService } from '../map.service';

@Component({
  selector: 'app-place-delete-all-dialog',
  templateUrl: './place-delete-all-dialog.component.html',
  styleUrls: ['./place-delete-all-dialog.component.scss']
})
export class PlaceDeleteAllDialogComponent implements OnInit {

  public dialog: MatDialog;
  public places: GeoJson[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private mapService: MapService
  ) { }

  ngOnInit() {
    this.places = this.data;
  }

  deletePlaces() {
    this.places.forEach(place => this.mapService.deleteFeature(place));
  }

}
