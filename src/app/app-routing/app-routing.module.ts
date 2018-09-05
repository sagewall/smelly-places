import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { MapEditComponent } from '../map-edit/map-edit.component';
import { MapComponent } from '../map/map.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { PrivacyPolicyComponent } from '../privacy-policy/privacy-policy.component';
import { TermsOfServiceComponent } from '../terms-of-service/terms-of-service.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/map', pathMatch: 'full' },
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
  { path: 'privacy', component: PrivacyPolicyComponent },
  { path: 'terms', component: TermsOfServiceComponent },
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
