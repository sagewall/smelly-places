import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { CookiePolicyComponent } from './cookie-policy/cookie-policy.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { HomeComponent } from './home/home.component';
import { MapEditComponent } from './map-edit/map-edit.component';
import { MapComponent } from './map/map.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PlaceDeleteAllDialogComponent } from './place-delete-all-dialog/place-delete-all-dialog.component';
import { PlaceDeleteDialogComponent } from './place-delete-dialog/place-delete-dialog.component';
import { PlaceEditDialogComponent } from './place-edit-dialog/place-edit-dialog.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileDeleteDialogComponent } from './profile-delete-dialog/profile-delete-dialog.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';

@NgModule({
  declarations: [
    AppComponent,
    CookiePolicyComponent,
    DisclaimerComponent,
    HomeComponent,
    NavigationComponent,
    MapComponent,
    MapEditComponent,
    NotFoundComponent,
    PlaceDeleteAllDialogComponent,
    PlaceDeleteDialogComponent,
    PlaceEditDialogComponent,
    PrivacyPolicyComponent,
    ProfileComponent,
    ProfileDeleteDialogComponent,
    TermsOfUseComponent
  ],
  imports: [
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    LayoutModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  entryComponents: [
    PlaceDeleteAllDialogComponent,
    PlaceDeleteDialogComponent,
    PlaceEditDialogComponent,
    ProfileDeleteDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
