import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardContainerComponent } from './dashboard-container/dashboard-container.component';
import { DashboardBlockComponent } from './dashboard-block/dashboard-block.component';
import { SampleModule } from "@abcfoundry/common/samples/sample";
import {UiBaseModule} from "@abcfoundry/common/ui/ui-base";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      {
        path: 'home',
        pathMatch: 'full',
        component: DashboardContainerComponent
      }
    ]),
    SampleModule,
    UiBaseModule
  ],
  declarations: [DashboardContainerComponent, DashboardBlockComponent]
})
export class CockpitDashboardModule {}
