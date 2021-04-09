import { NgModule } from '@angular/core';

import { MenuItemDirective } from './menu-item.directive';
import { MenuDirective } from './menu.directive';
import { MenuService } from './menu.service';
import { SimpleMenuComponent } from './simple-menu/simple-menu.component';

const COMPONENTS = [SimpleMenuComponent, MenuItemDirective, MenuDirective];

@NgModule({
  declarations: COMPONENTS,
  entryComponents: [SimpleMenuComponent],
  exports: COMPONENTS,
  providers: [MenuService],
})
export class SimpleMenuModule {}
