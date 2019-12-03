import { Injectable } from '@angular/core';
import { MessageType } from './toasts/toast.interface';

@Injectable()
export class ToastService {
  constructor() {}
  messages = [];

  info(message: string) {
    this.push('info', message);
  }

  success(message: string) {
    this.push('success', message);
  }

  warning(message: string) {
    this.push('warning', message);
  }

  error(message: string) {
    this.push('error', message);
  }

  push(type: MessageType, message: string) {
    const toast = { type, message };
    this.messages.push(toast);
    window.setTimeout(() => this.dismiss(-1), 5000);
  }

  dismiss(messageKey) {
    this.messages.splice(messageKey, 1);
  }
}
