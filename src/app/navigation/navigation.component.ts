import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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
