import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { ModalService } from './modal.service';
import { OverlayModule } from '@angular/cdk/overlay';
import { ModalCloseButtonDirective } from './modal-close-button';

@NgModule({
  declarations: [ModalComponent, ModalCloseButtonDirective],
  imports: [CommonModule, OverlayModule],
  exports: [OverlayModule, ModalCloseButtonDirective],
  providers: [ModalService],
  entryComponents: [ModalComponent],
})
export class ModalModule {}
