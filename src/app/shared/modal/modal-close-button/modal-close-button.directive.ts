import { Directive, HostListener } from '@angular/core';

import { ModalService } from '../modal.service';

@Directive({
  selector: '[appModalCloseButton]',
})
export class ModalCloseButtonDirective {
  constructor(public modalService: ModalService) {}

  @HostListener('click') onClick() {
    this.modalService.closeCurrent();
  }
}
