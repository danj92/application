import { Component, OnInit, Input } from '@angular/core';
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
export class ToastComponent implements OnInit {
  @Input() toast: Toast;

  constructor() {}

  ngOnInit() {}

  get icon() {
    return ICON[this.toast.type];
  }
}
