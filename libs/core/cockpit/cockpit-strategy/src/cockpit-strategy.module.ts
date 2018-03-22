import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StrategyContainerComponent } from './strategy-container/strategy-container.component';
import { StrategyBlockComponent } from './strategy-block/strategy-block.component';
import {SampleModule} from "@abcfoundry/common/samples/sample";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: 'home', pathMatch: 'full', component: StrategyContainerComponent }
    ]),
    SampleModule
  ],
  declarations: [StrategyContainerComponent, StrategyBlockComponent]
})
export class CockpitStrategyModule {}
