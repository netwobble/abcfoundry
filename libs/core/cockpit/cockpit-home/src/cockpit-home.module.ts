import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { HomeContentComponent } from './home-content/home-content.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { DashboardContainerComponent } from '@abcfoundry/core/cockpit/cockpit-dashboard/src/dashboard-container/dashboard-container.component';
import { UiBaseModule } from '@abcfoundry/common/ui/ui-base';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

export const cockpitHomeRoutes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    component: HomeContentComponent,
    children: [
      { path: 'header', component: HomeHeaderComponent, outlet: 'topview' },
      { path: 'footer', component: HomeFooterComponent, outlet: 'bottomview' }
    ]
  },
  { path: 'header', component: HomeHeaderComponent, outlet: 'topview' },
  { path: 'footer', component: HomeFooterComponent, outlet: 'bottomview' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(cockpitHomeRoutes),
    UiBaseModule
  ],
  declarations: [
    HomeContentComponent,
    HomeHeaderComponent,
    HomeFooterComponent
  ],
  exports: [HomeHeaderComponent, HomeContentComponent, HomeFooterComponent]
})
export class CockpitHomeModule {}
