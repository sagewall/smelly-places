import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { CookiePolicyComponent } from '../cookie-policy/cookie-policy.component';
import { CurrentUserResolverService } from '../current-user-resolver.service';
import { DisclaimerComponent } from '../disclaimer/disclaimer.component';
import { HomeComponent } from '../home/home.component';
import { MapEditComponent } from '../map-edit/map-edit.component';
import { MapComponent } from '../map/map.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { PrivacyPolicyComponent } from '../privacy-policy/privacy-policy.component';
import { ProfileComponent } from '../profile/profile.component';
import { TermsOfUseComponent } from '../terms-of-use/terms-of-use.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'map',
    children: [
      {
        path: '',
        component: MapComponent
      },
      {
        path: 'edit',
        component: MapEditComponent,
        canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: 'profile',
    canActivate: [AuthGuard],
    resolve: { currentUser: CurrentUserResolverService },
    component: ProfileComponent
  },
  { path: 'cookie', component: CookiePolicyComponent },
  { path: 'disclaimer', component: DisclaimerComponent },
  { path: 'privacy', component: PrivacyPolicyComponent },
  { path: 'terms', component: TermsOfUseComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
