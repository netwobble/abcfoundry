import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { AuthGuard } from './shared';

const routes: Routes = [
  //   { path: '', loadChildren: './layout/layout.module#LayoutModule', canActivate: [AuthGuard] },
  { path: '', pathMatch: 'full', redirectTo: 'cockpit' },
  {
    path: 'cockpit',
    loadChildren: '@abcfoundry/core/cockpit/cockpit-home#CockpitHomeModule'
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
  {
    path: 'sample',
    loadChildren: '@abcfoundry/common/samples/sample#SampleModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      paramsInheritanceStrategy: 'always',
      initialNavigation: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
