import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AnalysisContainerComponent } from './analysis-container/analysis-container.component';
import { AnalysisBlockComponent } from './analysis-block/analysis-block.component';
import { SampleModule } from '@abcfoundry/common/samples/sample';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: 'home', pathMatch: 'full', component: AnalysisContainerComponent }
    ]),
    SampleModule
  ],
  declarations: [AnalysisContainerComponent, AnalysisBlockComponent]
})
export class CockpitAnalysisModule {}
