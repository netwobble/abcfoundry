import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserContainerComponent } from './user-container/user-container.component';
import { UserBlockComponent } from './user-block/user-block.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserLogoutComponent } from './user-logout/user-logout.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: 'home', component: UserContainerComponent },
      { path: 'login', component: UserLoginComponent },
      { path: 'logout', component: UserLogoutComponent },
      { path: 'profile', loadChildren: '@abcfoundry/core/party/profile#ProfileModule' }
    ])
  ],
  declarations: [
    UserContainerComponent,
    UserBlockComponent,
    UserLoginComponent,
    UserLogoutComponent
  ]
})
export class UserModule {}
