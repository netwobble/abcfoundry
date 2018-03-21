import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PromotionContainerComponent } from './promotion-container/promotion-container.component';
import { PromotionBlockComponent } from './promotion-block/promotion-block.component';

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
    ])
  ],
  declarations: [PromotionContainerComponent, PromotionBlockComponent]
})
export class CockpitPromotionModule {}



