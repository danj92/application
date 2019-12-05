import {
  Component,
  Input,
} from '@angular/core';
import { AbstractControlComponent } from '../abstract-control-component';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: [
    './input.component.scss',
    '../abstract-control-component.scss',
  ],
})
export class InputComponent extends AbstractControlComponent<string> {
  @Input() label: string;

  @Input() type = 'text';

  @Input() placeholder = '';
}
