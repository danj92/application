import { Injectable } from '@angular/core';
import { CanLoad, Route, Router } from '@angular/router';

@Injectable()
export class CanLoadWhenFeatureFlagEnabledGuard implements CanLoad {
  constructor(private router: Router) {}
  canLoad(route: Route) {
    if (!route.data.featureFlag) {
      this.router.navigateByUrl('/');
    }
    return route.data.featureFlag;
  }
}
