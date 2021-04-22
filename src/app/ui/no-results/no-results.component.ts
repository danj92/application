import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-no-results',
  templateUrl: './no-results.component.html',
  styleUrls: ['./no-results.component.scss'],
})
export class NoResultsComponent {
  @Input() imagePath = 'assets/no-results.svg';
  @Input() message = 'No results';
  @Input() secondaryMessage: string;
}
