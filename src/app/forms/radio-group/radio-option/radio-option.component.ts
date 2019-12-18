import {
  Component,
  OnInit,
  Input,
  HostBinding,
  ElementRef,
} from '@angular/core';

import { RadioGroupService } from '../radio-group.service';
import { RadioOption } from '../radio-option.interface';

@Component({
  selector: 'app-radio-option',
  templateUrl: './radio-option.component.html',
  styleUrls: ['./radio-option.component.scss'],
})
export class RadioOptionComponent implements OnInit, RadioOption {
  @Input() value: string;

  @HostBinding('class.selected')
  isSelected = false;

  constructor(
    private radioGroupService: RadioGroupService,
    public elementRef: ElementRef<HTMLElement>,
  ) {}

  ngOnInit() {
    this.radioGroupService.addOption(this);
  }

  select() {
    if (this.enabled) {
      this.radioGroupService.select(this);
    }
  }

  onKeyDown(event: KeyboardEvent) {
    if (this.enabled && event.key === ' ') {
      this.select();
      event.preventDefault();
    }
  }

  @HostBinding('class.disabled')
  get disabled() {
    return this.formControl.disabled;
  }

  get formControl() {
    return this.radioGroupService.formControl;
  }

  get enabled() {
    return this.formControl.enabled;
  }

  get tabindex() {
    return this.enabled ? 0 : -1;
  }
}
