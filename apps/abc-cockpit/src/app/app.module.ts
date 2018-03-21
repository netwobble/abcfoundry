import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';

import { StructureModule } from '@abcfoundry/common/structure';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    RouterModule.forRoot(
      [
        { path: '', pathMatch: 'full', redirectTo: 'cockpit' },
        {
          path: 'cockpit',
          loadChildren:
            '@abcfoundry/core/cockpit/cockpit-home#CockpitHomeModule'
        },
        {
          path: 'dashboard',
          loadChildren:
            '@abcfoundry/core/cockpit/cockpit-dashboard#CockpitDashboardModule'
        },
        {
          path: 'strategy',
          loadChildren:
            '@abcfoundry/core/cockpit/cockpit-strategy#CockpitStrategyModule'
        },
        {
          path: 'analysis',
          loadChildren:
            '@abcfoundry/core/cockpit/cockpit-analysis#CockpitAnalysisModule'
        },
        {
          path: 'promotion',
          loadChildren:
            '@abcfoundry/core/cockpit/cockpit-promotion#CockpitPromotionModule'
        },
        {
          path: 'business',
          loadChildren:
            '@abcfoundry/core/cockpit/cockpit-business#CockpitBusinessModule'
        },
        {
          path: 'settings',
          loadChildren:
            '@abcfoundry/core/cockpit/cockpit-setting#CockpitSettingModule'
        },
        {
          path: 'organization',
          loadChildren: '@abcfoundry/core/party/organization#OrganizationModule'
        },
        {
          path: 'account',
          loadChildren: '@abcfoundry/core/party/account#AccountModule'
        },
        {
          path: 'user',
          loadChildren: '@abcfoundry/core/party/user#UserModule'
        },

      ],
      { paramsInheritanceStrategy: 'always', initialNavigation: 'enabled' }
    ),
    StructureModule,
    NgbModule.forRoot()
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
