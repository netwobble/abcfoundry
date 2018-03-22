import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BusinessContainerComponent } from './business-container/business-container.component';
import { BusinessBlockComponent } from './business-block/business-block.component';
import { SampleModule } from '@abcfoundry/common/samples/sample';

@NgModule({
  imports: [
    CommonModule,
    SampleModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: 'home', pathMatch: 'full', component: BusinessContainerComponent }
      // { path: 'articles', loadChildren: '@abcfoundry/biz-modules/biz-article/article#ArticleModule' }
    ])
  ],
  declarations: [BusinessContainerComponent, BusinessBlockComponent]
})
export class CockpitBusinessModule {}
