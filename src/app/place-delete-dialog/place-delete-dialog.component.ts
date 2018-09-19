import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { GeoJson } from '../geo-json';
import { MapService } from '../map.service';

@Component({
  selector: 'app-place-delete-dialog',
  templateUrl: './place-delete-dialog.component.html',
  styleUrls: ['./place-delete-dialog.component.sass']
})
export class PlaceDeleteDialogComponent implements OnInit {

  public dialog: MatDialog;
  public place: GeoJson;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private mapService: MapService
  ) { }

  ngOnInit() {
    this.place = this.data;
  }

  deletePlace() {
    this.mapService.deleteFeature(this.place);
  }

}
