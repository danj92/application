import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Fruit } from './../custom-mat-chip-list/custom-mat-chip-list.component'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-use-custom-mat-chip-list',
  templateUrl: './use-custom-mat-chip-list.component.html',
  styleUrls: ['./use-custom-mat-chip-list.component.scss']
})
export class UseCustomMatChipListComponent implements OnInit, OnDestroy {
  formGroup: FormGroup;
  fruits: Fruit[] = [];
  fruitsSubscription: Subscription;
  constructor(private fb: FormBuilder) {}
  

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      fruitsControl: [[]],
    });

    this.fruitsSubscription = this.formGroup.valueChanges.subscribe(x => this.fruits = x.fruitsControl);
  }

  ngOnDestroy(): void {
    this.fruitsSubscription?.unsubscribe();
  }
}
