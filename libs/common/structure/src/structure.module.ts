import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructureMainComponent } from './structure-main/structure-main.component';
import { StructureContentComponent } from './structure-content/structure-content.component';
import { StructureHeaderComponent } from './structure-header/structure-header.component';
import { StructureFooterComponent } from './structure-footer/structure-footer.component';
import { RouterModule } from '@angular/router';
import { CockpitHomeModule } from '@abcfoundry/core/cockpit/cockpit-home';

@NgModule({
  imports: [CommonModule, RouterModule, CockpitHomeModule],
  declarations: [
    StructureMainComponent,
    StructureContentComponent,
    StructureHeaderComponent,
    StructureFooterComponent
  ],
  exports: [StructureMainComponent]
})
export class StructureModule {}
