import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OrganizationContainerComponent } from './organization-container/organization-container.component';
import { OrganizationBlockComponent } from './organization-block/organization-block.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: 'home', component: OrganizationContainerComponent }
    ])
  ],
  declarations: [OrganizationContainerComponent, OrganizationBlockComponent]
})
export class OrganizationModule {}
