import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapEditComponent } from '../map-edit/map-edit.component';
import { MapComponent } from '../map/map.component';
import { NotFoundComponent } from '../not-found/not-found.component';

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
        component: MapEditComponent
      }
    ]
  },
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
