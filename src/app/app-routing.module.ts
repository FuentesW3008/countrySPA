import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutPageComponent } from './shared/pages/about-page/about-page.component';

  const routes: Routes = [
  // {
  //   path: '',
  //   component: HomePageComponent
  // },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: 'countries',
    loadChildren: () => import('./countries/countries.module').then( m => m.CountriesModule),
  },
  {
    path: '**',
    redirectTo: 'countries'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot( routes ),
  ],

  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
