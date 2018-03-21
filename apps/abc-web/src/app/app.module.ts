import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { StructureModule } from '@abcfoundry/common/structure';

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
        }
      ],
      { initialNavigation: 'enabled' }
    ),
    StructureModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
