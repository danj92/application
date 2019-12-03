import { Component, OnInit } from '@angular/core';
import { ToastService } from '../toast.service';
import { trigger, style, animate, transition } from '@angular/animations';

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
export class ToastsComponent implements OnInit {
  constructor(public toasts: ToastService) {}

  ngOnInit() {}
}
