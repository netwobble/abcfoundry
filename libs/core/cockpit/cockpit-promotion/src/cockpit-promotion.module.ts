import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PromotionContainerComponent } from './promotion-container/promotion-container.component';
import { PromotionBlockComponent } from './promotion-block/promotion-block.component';
import { SampleModule } from '@abcfoundry/common/samples/sample';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      {
        path: 'home',
        pathMatch: 'full',
        component: PromotionContainerComponent
      }
    ]),
    SampleModule
  ],
  declarations: [PromotionContainerComponent, PromotionBlockComponent]
})
export class CockpitPromotionModule {}
