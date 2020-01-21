import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Input() tmpl: TemplateRef<void>;

  constructor() {}

  ngOnInit() {}

  setTemplate(tmpl: TemplateRef<void>) {
    this.tmpl = tmpl;
  }
}
