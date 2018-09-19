import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { GeoJson } from '../geo-json';
import { MapService } from '../map.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  currentUser: firebase.User;
  places$: Observable<GeoJson[]>;

  constructor(
    private route: ActivatedRoute,
    private mapService: MapService
  ) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: { currentUser: firebase.User }) => {
        this.currentUser = data.currentUser;
      });

    this.places$ = this.mapService.getFeaturesByUser(this.currentUser.uid).valueChanges();
  }

}
