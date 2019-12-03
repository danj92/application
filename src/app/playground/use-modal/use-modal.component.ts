import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { ModalService } from 'src/app/shared/modal/modal.service';

@Component({
  selector: 'app-use-modal',
  templateUrl: './use-modal.component.html',
  styleUrls: ['./use-modal.component.scss'],
})
export class UseModalComponent implements OnInit {
  @ViewChild('myModal', { static: true })
  myDialog: TemplateRef<void>;

  constructor(private modal: ModalService) {}

  ngOnInit() {}

  open() {
    this.modal.open('Modal title', this.myDialog, {
      size: 'big',
      templateContext: {
        name: 'context',
      },
    });
  }
}
