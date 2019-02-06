import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material';
import { NavigationEnd, Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { PolicyAcceptanceComponent } from '../policy-acceptance/policy-acceptance.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  isHandset$: Observable<boolean>;

  constructor(
    public afAuth: AngularFireAuth,
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset)
      .pipe(
        map(result => result.matches)
      );

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      document.querySelector('.mat-sidenav-content').scrollTop = 0;
    });

    if (localStorage.getItem('smellyplaces.policiesAccepted') !== '2/3/2019') {
      this.displaySnackBar();
    }

  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.router.navigate(['']);
    this.afAuth.auth.signOut();
  }

  displaySnackBar() {
    this.snackBar.openFromComponent(PolicyAcceptanceComponent);
  }

}
