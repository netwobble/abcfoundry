import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SampleDashboardComponent } from './sample-dashboard/sample-dashboard.component';
import { SampleChartComponent } from './sample-chart/sample-chart.component';
import { SampleTablesComponent } from './sample-tables/sample-tables.component';
import { SampleFormsComponent } from './sample-forms/sample-forms.component';
import { SampleElementComponent } from './sample-element/sample-element.component';
import { SampleComponentComponent } from './sample-component/sample-component.component';
import { StatComponent } from './stat/stat.component';
import { UiBaseModule } from '@abcfoundry/common/ui/ui-base';

import {
  AlertComponent,
  ButtonsComponent,
  ModalComponent,
  CollapseComponent,
  DatePickerComponent,
  DropdownComponent,
  PaginationComponent,
  PopOverComponent,
  ProgressbarComponent,
  TabsComponent,
  RatingComponent,
  TooltipComponent,
  TimepickerComponent
} from './sample-component/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  ChatComponent,
  NotificationComponent,
  TimelineComponent
} from '@abcfoundry/common/samples/sample/src/sample-dashboard/components';
import { PageHeaderComponent } from '@abcfoundry/common/samples/sample/src/page-header/page-header.component';

@NgModule({
  imports: [
    CommonModule,
    UiBaseModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      { path: 'dashboard', component: SampleDashboardComponent },
      { path: 'charts', component: SampleChartComponent },
      { path: 'tables', component: SampleTablesComponent },
      { path: 'forms', component: SampleFormsComponent },
      { path: 'elements', component: SampleElementComponent },
      { path: 'components', component: SampleComponentComponent }
    ])
  ],
  declarations: [
    SampleDashboardComponent,
    SampleChartComponent,
    SampleTablesComponent,
    SampleFormsComponent,
    SampleElementComponent,
    SampleComponentComponent,
    ButtonsComponent,
    AlertComponent,
    ModalComponent,
    CollapseComponent,
    DatePickerComponent,
    DropdownComponent,
    PaginationComponent,
    PopOverComponent,
    ProgressbarComponent,
    TabsComponent,
    RatingComponent,
    TooltipComponent,
    TimepickerComponent,
    TimelineComponent,
    NotificationComponent,
    ChatComponent,
    StatComponent,
    PageHeaderComponent
  ],
  exports: [
    SampleDashboardComponent,
    SampleChartComponent,
    SampleTablesComponent,
    SampleFormsComponent,
    SampleElementComponent,
    SampleComponentComponent,
    StatComponent,
    PageHeaderComponent
  ]
})
export class SampleModule {}
