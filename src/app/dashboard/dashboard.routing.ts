import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

export const dashboard: Routes = [
  {
    path: '',
    component: DashboardComponent,
    resolve: {},
  },
];

@NgModule({
  imports: [RouterModule.forChild(dashboard)],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }
