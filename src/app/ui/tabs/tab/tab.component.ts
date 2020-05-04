import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent implements OnInit {
  @Input() tabTitle: string;

  // @Output() select = new EventEmitter<void>();

  isVisible = false;

  constructor() {}

  ngOnInit() {}

  hide() {
    this.isVisible = false;
  }

  show() {
    this.isVisible = true;
    // this.select.next();
  }
}
