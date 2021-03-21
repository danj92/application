import { Component, Input, OnInit, Output } from '@angular/core';

import { AbstractControlDirective } from '../abstract-control-component';
import { RadioGroupService } from './radio-group.service';

@Component({
  selector: 'app-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['../abstract-control-component.scss', './radio-group.component.scss'],
  providers: [RadioGroupService],
})
export class RadioGroupComponent extends AbstractControlDirective<string>
  implements OnInit {
  @Input() value: string;

  // eslint-disable-next-line @angular-eslint/no-output-native
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
