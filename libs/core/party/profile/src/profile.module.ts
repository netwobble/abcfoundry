import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProfileContainerComponent } from './profile-container/profile-container.component';
import { ProfileBlockComponent } from './profile-block/profile-block.component';
import { PreferenceContainerComponent } from './preference-container/preference-container.component';
import { PreferenceBlockComponent } from './preference-block/preference-block.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: 'home', component: ProfileContainerComponent }
    ])
  ],
  declarations: [ProfileContainerComponent, ProfileBlockComponent, PreferenceContainerComponent, PreferenceBlockComponent]
})
export class ProfileModule {}
