import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ModalModule } from './modal/modal.module';

const COMPONENTS = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  ModalModule,
];

@NgModule({
  imports: [COMPONENTS],
  providers: [],
  declarations: [PageNotFoundComponent],
  exports: [COMPONENTS],
})
export class SharedModule { }
