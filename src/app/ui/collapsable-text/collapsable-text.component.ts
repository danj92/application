import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-collapsable-text',
  templateUrl: './collapsable-text.component.html',
  styleUrls: ['./collapsable-text.component.scss'],
})
export class CollapsableTextComponent {
  @Input() text: string;

  @Input() maxLength = 120;

  @Input() position = 'center';

  isCollapsed = true;

  punctuations = new Set([' ', '\n', '.', ',', ':', ';', '!', '?', '-']);

  get needsToBeCut() {
    return this.text.length > this.maxLength;
  }

  get transformedText() {
    if (!this.isCollapsed || !this.needsToBeCut) {
      return this.text;
    }

    let punctuationFound = false;
    let index = this.maxLength;

    // find punctuation on text
    while (!punctuationFound && index > 0) {
      if (this.punctuations.has(this.text[index])) {
        punctuationFound = true;
        break;
      }
      index--;
    }

    // find the index in the range of selected text
    while (punctuationFound && index > 0) {
      if (!this.punctuations.has(this.text[index])) {
        punctuationFound = false;
        break;
      }
      index--;
    }

    return this.text.substring(0, index + 1) + '…';
  }

  toggle(event: Event) {
    this.isCollapsed = !this.isCollapsed;
    event.stopPropagation();
  }
}
