import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { environment } from 'src/environments/environment';
import { CanLoadWhenFeatureFlagEnabledGuard } from './core/can-load-when-feature-flag-enabled.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LandingPageComponent,
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
export class AppRoutingModule {}
