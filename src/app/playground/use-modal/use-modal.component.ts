import { Component, ViewChild, TemplateRef } from '@angular/core';

import { ModalService } from '../../../app/shared/modal/modal.service';

@Component({
  selector: 'app-use-modal',
  templateUrl: './use-modal.component.html',
  styleUrls: ['./use-modal.component.scss'],
})
export class UseModalComponent {
  @ViewChild('myModal', { static: true })
  myDialog: TemplateRef<void>;

  constructor(private modal: ModalService) {}

  open() {
    this.modal.open('Modal title', this.myDialog, {
      size: 'big',
      templateContext: {
        name: 'context',
      },
    });
  }
}
