import { Component, Input } from '@angular/core';

import { Toast } from '../toast.interface';

const ICON = {
  info: 'error_outline',
  success: 'done',
  warning: 'warning',
  error: 'highlight_off',
};
@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent {
  @Input() toast: Toast;

  get icon() {
    return ICON[this.toast.type];
  }
}
