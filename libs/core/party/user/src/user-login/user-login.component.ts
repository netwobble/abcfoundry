import { Component, OnInit } from '@angular/core';
import { routerTransition } from '@abcfoundry/common/ui/ui-base';

@Component({
  selector: 'user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
  animations: [routerTransition()]
})
export class UserLoginComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  onLoggedin() {
    localStorage.setItem('isLoggedin', 'true');
  }
}
