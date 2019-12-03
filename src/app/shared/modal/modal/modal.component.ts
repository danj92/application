import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  HostListener,
  TemplateRef,
  HostBinding,
  Input,
} from '@angular/core';

import { OverlayRef } from '@angular/cdk/overlay';
import { ModalSize } from './modal-options';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Output() closed = new EventEmitter<void>();

  title: string;

  @HostBinding('attr.data-size')
  modalSize: ModalSize;

  overlayRef: OverlayRef;

  templateRef: TemplateRef<any>;

  templateContext: any;

  constructor() {}

  @HostListener('document:keydown', ['$event'])
  handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.close();
    }
  }

  ngOnInit() {}

  close() {
    this.overlayRef.dispose();
    this.closed.next();
    this.closed.complete();
  }
}
