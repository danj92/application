import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppFormsModule } from '../forms';
import { SharedModule } from '../shared/shared.module';
import { SimpleMenuModule } from '../simple-menu/simple-menu.module';
import { CollapsableTextComponent } from './collapsable-text/collapsable-text.component';
import { CustomCheckboxComponent } from './custom-checkbox/custom-checkbox.component';
import { CustomSelectOptionComponent } from './custom-dropdown/custom-select-option/custom-select-option.component';
import { CustomSelectComponent } from './custom-dropdown/custom-select/custom-select.component';
import { DropdownComponent } from './custom-dropdown/dropdown/dropdown.component';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { FooterComponent } from './footer/footer.component';
import { FunnelComponent } from './funnel/funnel.component';
import { NoResultsComponent } from './no-results/no-results.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { RadioGrpComponent } from './radio-grp/radio-grp.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { TabsComponent, TabComponent } from './tabs';
import { TimepickerComponent } from './timepicker/timepicker.component';
import { TooltipDirective } from './tooltip.directive';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TopBarComponent } from './top-bar/top-bar.component';

const COMPONENTS = [
  TopBarComponent,
  FooterComponent,
  ProgressBarComponent,
  NoResultsComponent,
  SpinnerComponent,
  TabsComponent,
  TabComponent,
  SidebarComponent,
  CollapsableTextComponent,
  TooltipComponent,
  TooltipDirective,
  CustomSelectComponent,
  CustomSelectOptionComponent,
  DropdownComponent,
  TimepickerComponent,
  CustomInputComponent,
  CustomCheckboxComponent,
  RadioGrpComponent,
  PaginationComponent,
  FunnelComponent,
];

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule,
    RouterModule,
    PortalModule,
    SimpleMenuModule,
    SharedModule,
    AppFormsModule,
  ],
  exports: [COMPONENTS],
  providers: [],
  entryComponents: [TooltipComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UIModule {}
