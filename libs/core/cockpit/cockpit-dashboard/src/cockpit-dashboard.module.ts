import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardContainerComponent } from './dashboard-container/dashboard-container.component';
import { DashboardBlockComponent } from './dashboard-block/dashboard-block.component';

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
    ])
  ],
  declarations: [DashboardContainerComponent, DashboardBlockComponent]
})
export class CockpitDashboardModule {}
