import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  currentUser: firebase.User;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: { currentUser: firebase.User }) => {
        this.currentUser = data.currentUser;
      });
  }

}
