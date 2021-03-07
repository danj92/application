import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { SimpleMenuModule } from '../simple-menu/simple-menu.module';
import { SharedModule } from '../shared/shared.module';
import { NoResultsComponent } from './no-results/no-results.component';
import { AppFormsModule } from '../forms';
import { SpinnerComponent } from './spinner/spinner.component';
import { TabsComponent, TabComponent } from './tabs';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CollapsableTextComponent } from './collapsable-text/collapsable-text.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TooltipDirective } from './tooltip.directive';
import { DropdownComponent } from './custom-dropdown/dropdown/dropdown.component';
import { CustomSelectOptionComponent } from './custom-dropdown/custom-select-option/custom-select-option.component';
import { CustomSelectComponent } from './custom-dropdown/custom-select/custom-select.component';
import { PortalModule } from '@angular/cdk/portal';
import { TimepickerComponent } from './timepicker/timepicker.component';
import { CustomInputComponent } from './custom-input/custom-input.component';

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
];

@NgModule({
  declarations: [COMPONENTS, CustomInputComponent],
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
})
export class UIModule {}
