import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { SeoService } from './seo.service';
import { ToastComponent } from './toasts/toast/toast.component';
import { ToastService } from './toast.service';
import { SharedModule } from '../shared/shared.module';
import { ToastsComponent } from './toasts/toasts.component';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { ErrorInterceptor } from './error.interceptor';
import { CanLoadWhenFeatureFlagEnabledGuard } from './can-load-when-feature-flag-enabled.guard';
import { CoreService } from './core.service';

@NgModule({
  imports: [HttpClientModule, SharedModule],
  providers: [
    SeoService,
    ToastService,
    ApiService,
    CoreService,
    CanLoadWhenFeatureFlagEnabledGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
  ],
  declarations: [ToastComponent, ToastsComponent],
  exports: [ToastComponent, ToastsComponent],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
