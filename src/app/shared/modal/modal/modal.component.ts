import { OverlayRef } from '@angular/cdk/overlay';
import {
  Component,
  Output,
  EventEmitter,
  HostListener,
  TemplateRef,
  HostBinding,
} from '@angular/core';

import { ModalSize } from './modal-options';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Output() closed = new EventEmitter<void>();

  title: string;

  @HostBinding('attr.data-size')
  modalSize: ModalSize;

  overlayRef: OverlayRef;

  templateRef: TemplateRef<any>;

  templateContext: any;
  @HostListener('document:keydown', ['$event'])
  handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.close();
    }
  }

  close() {
    this.overlayRef.dispose();
    this.closed.next();
    this.closed.complete();
  }
}
