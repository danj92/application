import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersResolve } from 'app/core/resolver';

import { LandingPageComponent } from './landing-page.component';

export const landingPage: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    resolve: {
      users: UsersResolve,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(landingPage)],
  exports: [RouterModule],
})
export class LandingPageRoutingModule {}
