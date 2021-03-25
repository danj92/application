import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ApiService } from './api.service';
import { CanLoadWhenFeatureFlagEnabledGuard } from './can-load-when-feature-flag-enabled.guard';
import { ErrorInterceptor } from './error.interceptor';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { SeoService } from './seo.service';
import { ToastService } from './toast.service';
import { ToastComponent } from './toasts/toast/toast.component';
import { ToastsComponent } from './toasts/toasts.component';

const COMPONENTS = [ToastComponent, ToastsComponent];

@NgModule({
  imports: [HttpClientModule, SharedModule],
  providers: [
    SeoService,
    ToastService,
    ApiService,
    CanLoadWhenFeatureFlagEnabledGuard,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: ErrorInterceptor,
    //   multi: true,
    // },
  ],
  declarations: [COMPONENTS],
  exports: [COMPONENTS],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  // static forRoot() {
  //   return {
  //     ngModule: CoreModule,
  //     providers: [
  //       {
  //         provide: HTTP_INTERCEPTORS,
  //         useClass: ErrorInterceptor,
  //         multi: true,
  //       },
  //     ],
  //   };
  // }
}
