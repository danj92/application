import { SidebarComponent } from './sidebar.component';
import { TemplateRef } from '@angular/core';

export class SidebarService {
  sidebar: SidebarComponent;

  setTemplate(tmpl: TemplateRef<void>) {
    this.sidebar.setTemplate(tmpl);
  }
}
