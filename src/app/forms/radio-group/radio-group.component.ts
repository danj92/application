import { Component, Input, Output } from '@angular/core';

import { RadioGroupService } from './radio-group.service';
import { AbstractControlComponent } from '../abstract-control-component';

@Component({
  selector: 'app-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['../abstract-control-component.scss', './radio-group.component.scss'],
  providers: [RadioGroupService],
})
export class RadioGroupComponent extends AbstractControlComponent<string> {
  @Input() value: string;

  @Output() change = this.radioGroupService.change;

  constructor(private radioGroupService: RadioGroupService) {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
    this.radioGroupService.formControl = this.formControl;
    this.radioGroupService.initialValue = this.value
      ? this.value
      : this.formControl.value;
  }
}
