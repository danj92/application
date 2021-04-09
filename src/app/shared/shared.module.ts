import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ModalModule } from './modal/modal.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const COMPONENTS = [CommonModule, FormsModule, ReactiveFormsModule, ModalModule];

@NgModule({
  imports: [COMPONENTS],
  declarations: [PageNotFoundComponent],
  exports: [COMPONENTS],
})
export class SharedModule {}
