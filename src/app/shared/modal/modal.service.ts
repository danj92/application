import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable, TemplateRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { ModalOptions } from './modal/modal-options';
import { ModalComponent } from './modal/modal.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  modal: ModalComponent;

  constructor(private overlay: Overlay, router: Router) {
    router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.closeCurrent();
      }
    });
  }

  open(
    title: string,
    templateRef: TemplateRef<any>,
    modalOptions: ModalOptions = {
      size: 'medium',
    },
  ) {
    const overlayConfig = new OverlayConfig({
      positionStrategy: this.overlay
        .position()
        .global()
        .centerHorizontally()
        .top('15vh'),
      hasBackdrop: true,
      scrollStrategy: this.overlay.scrollStrategies.block(),
    });

    const overlayRef = this.overlay.create(overlayConfig);

    const contentPortal = new ComponentPortal(ModalComponent);
    const modal = overlayRef.attach(contentPortal);

    this.modal = modal.instance;
    this.modal.overlayRef = overlayRef;
    this.modal.templateRef = templateRef;
    this.modal.templateContext = modalOptions.templateContext;
    this.modal.title = title;
    this.modal.modalSize = modalOptions.size;

    overlayRef.backdropClick().subscribe(() => this.closeCurrent());
    this.modal.closed.subscribe(() => (this.modal = null));

    return this.modal;
  }

  closeCurrent() {
    if (this.modal) {
      this.modal.close();
    }
  }
}
