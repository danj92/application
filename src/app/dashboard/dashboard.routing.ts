import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { RequestsResolverService } from './requests.resolver.service';

export const dashboard: Routes = [
  {
    path: '',
    component: DashboardComponent,
    resolve: { requests: RequestsResolverService },
  },
];

@NgModule({
  imports: [RouterModule.forChild(dashboard)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
