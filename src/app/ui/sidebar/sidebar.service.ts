import { TemplateRef } from '@angular/core';

import { SidebarComponent } from './sidebar.component';

export class SidebarService {
  sidebar: SidebarComponent;

  setTemplate(tmpl: TemplateRef<void>) {
    this.sidebar.setTemplate(tmpl);
  }
}
