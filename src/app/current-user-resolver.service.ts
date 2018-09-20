import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserResolverService implements Resolve<firebase.User> {

  constructor(
    private afAuth: AngularFireAuth,
    private location: Location
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    if (this.afAuth.user) {
      return this.afAuth.auth.currentUser;
    } else {
      this.location.back();
      return null;
    }

  }

}
