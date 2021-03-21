import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input() tmpl: TemplateRef<void>;

  setTemplate(tmpl: TemplateRef<void>) {
    this.tmpl = tmpl;
  }
}
