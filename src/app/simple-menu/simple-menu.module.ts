import { NgModule } from '@angular/core';

import { SimpleMenuComponent } from './simple-menu/simple-menu.component';
import { MenuDirective } from './menu.directive';
import { MenuItemDirective } from './menu-item.directive';
import { MenuService } from './menu.service';

const COMPONENTS = [SimpleMenuComponent, MenuItemDirective, MenuDirective];

@NgModule({
  declarations: COMPONENTS,
  entryComponents: [SimpleMenuComponent],
  exports: COMPONENTS,
  providers: [MenuService],
})
export class SimpleMenuModule {}
