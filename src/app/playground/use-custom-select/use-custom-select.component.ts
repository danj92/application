import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-use-custom-select',
  templateUrl: './use-custom-select.component.html',
  styleUrls: ['./use-custom-select.component.scss'],
})
export class UseCustomSelectComponent implements OnInit {
  form: FormGroup;

  products = [
    { name: 'Bananas', price: 30, stock: 'in stock' },
    { name: 'Apples', price: 42, stock: 'N/A' },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      product: '',
    });
  }
}
