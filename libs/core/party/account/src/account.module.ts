import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AccountContainerComponent } from './account-container/account-container.component';
import { AccountBlockComponent } from './account-block/account-block.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: 'home', component: AccountContainerComponent},
      { path: 'profile', loadChildren: '@abcfoundry/core/party/profile#ProfileModule' }
    ])
  ],
  declarations: [AccountContainerComponent, AccountBlockComponent]
})
export class AccountModule {}
