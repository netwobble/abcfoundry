import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SettingContainerComponent } from './setting-container/setting-container.component';
import { SettingBlockComponent } from './setting-block/setting-block.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: 'home', pathMatch: 'full', component: SettingContainerComponent }
    ])
  ],
  declarations: [SettingContainerComponent, SettingBlockComponent]
})
export class CockpitSettingModule {}
