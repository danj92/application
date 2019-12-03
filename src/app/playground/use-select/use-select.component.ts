import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { of } from 'rxjs';

@Component({
  selector: 'app-use-select',
  templateUrl: './use-select.component.html',
  styleUrls: ['./use-select.component.scss'],
})
export class UseSelectComponent implements OnInit {
  form: FormGroup;
  orders = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      orders: [],
    });

    of(this.getOrders()).subscribe(orders => {
      this.orders = orders;
      this.form.controls.orders.patchValue(this.orders[0].id);
    });
  }

  getOrders() {
    return [
      { id: '1', name: 'order 1' },
      { id: '2', name: 'order 2' },
      { id: '3', name: 'order 3' },
      { id: '4', name: 'order 4' },
    ];
  }
}
