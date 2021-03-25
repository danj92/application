import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ErrorInterceptor } from 'app/core/error.interceptor';

import { ModalModule } from './modal/modal.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const COMPONENTS = [CommonModule, FormsModule, ReactiveFormsModule, ModalModule];

@NgModule({
  imports: [COMPONENTS],
  // providers: [
  //   {
  //     provide: HTTP_INTERCEPTORS,
  //     useClass: ErrorInterceptor,
  //     multi: true,
  //   },
  // ],
  declarations: [PageNotFoundComponent],
  exports: [COMPONENTS],
})
export class SharedModule {}
