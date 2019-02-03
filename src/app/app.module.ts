import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
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
  MatSnackBarModule,
  MatToolbarModule} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
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
import { PolicyAcceptanceComponent } from './policy-acceptance/policy-acceptance.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ProfileDeleteDialogComponent } from './profile-delete-dialog/profile-delete-dialog.component';
import { ProfileComponent } from './profile/profile.component';
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
    TermsOfUseComponent,
    PolicyAcceptanceComponent
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
    MatSnackBarModule,
    MatToolbarModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  entryComponents: [
    PlaceDeleteAllDialogComponent,
    PlaceDeleteDialogComponent,
    PlaceEditDialogComponent,
    PolicyAcceptanceComponent,
    ProfileDeleteDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
