import { trigger, style, animate, transition } from '@angular/animations';
import { Component } from '@angular/core';

import { ToastService } from '../toast.service';

@Component({
  selector: 'app-toasts',
  templateUrl: './toasts.component.html',
  styleUrls: ['./toasts.component.scss'],
  animations: [
    trigger('slide', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('100ms ease-in', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('300ms ease-in', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class ToastsComponent {
  constructor(public toasts: ToastService) {}
}
