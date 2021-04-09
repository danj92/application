import { Component } from '@angular/core';

import { ToastService } from 'app/core/toast.service';

@Component({
  selector: 'app-use-buttons',
  templateUrl: './use-buttons.component.html',
  styleUrls: ['./use-buttons.component.scss'],
})
export class UseButtonsComponent {
  constructor(private toastService: ToastService) {}

  primary() {
    this.toastService.info('Info');
  }

  secondary() {
    this.toastService.success('Success');
  }

  cancel() {
    this.toastService.error('Error');
  }
}
