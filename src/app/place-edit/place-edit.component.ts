import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { GeoJson } from '../geo-json';
import { MapService } from '../map.service';

@Component({
  selector: 'app-place-edit',
  templateUrl: './place-edit.component.html',
  styleUrls: ['./place-edit.component.sass']
})
export class PlaceEditComponent implements OnInit {
  feature: GeoJson;
  id: string;
  name: string;
  smell: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private mapService: MapService
  ) { }

  ngOnInit() {
    if (this.data.feature) {
      this.id = this.data.feature.properties.id;
      this.name = this.data.feature.properties.name;
      this.smell = this.data.feature.properties.smell;
      this.feature = new GeoJson(this.data.coordinates, {
        id: this.id,
        name: this.name,
        smell: this.smell
      });
    } else {
      this.feature = new GeoJson(this.data.coordinates, {});
    }
  }

  savePlace() {
    this.feature.properties.name = this.toTitleCase(this.name);
    this.feature.properties.smell = this.toTitleCase(this.smell);

    if (this.feature.properties.id) {
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
