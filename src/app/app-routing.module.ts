import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { environment } from 'src/environments/environment';
import { CanLoadWhenFeatureFlagEnabledGuard } from './core/can-load-when-feature-flag-enabled.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: 'reporting-form',
    loadChildren: () =>
      import('./reporting-form/reporting-form.module').then(
        m => m.ReportingFormModule,
      ),
  },
  {
    path: ':id',
    loadChildren: () =>
      import('./update-request/update-request.module').then(
        m => m.UpdateRequestModule,
      ),
  },
  {
    path: 'playground',
    canLoad: [CanLoadWhenFeatureFlagEnabledGuard],
    data: { featureFlag: environment.features.playground },
    loadChildren: () =>
      import('./playground/playground.module').then(m => m.PlaygroundModule),
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule { }
