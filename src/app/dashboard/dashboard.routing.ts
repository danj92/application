import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AllRequestsResolverService } from './all-requests.resolver.service';
import { RequestsResolverService } from './requests.resolver.service';

export const dashboard: Routes = [
  {
    path: '',
    component: DashboardComponent,
    resolve: {
      allRequests: AllRequestsResolverService,
      requests: RequestsResolverService,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(dashboard)],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }
