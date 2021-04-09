import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ModalCloseButtonDirective } from './modal-close-button';
import { ModalService } from './modal.service';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [ModalComponent, ModalCloseButtonDirective],
  imports: [CommonModule, OverlayModule],
  exports: [OverlayModule, ModalCloseButtonDirective],
  providers: [ModalService],
  entryComponents: [ModalComponent],
})
export class ModalModule {}
