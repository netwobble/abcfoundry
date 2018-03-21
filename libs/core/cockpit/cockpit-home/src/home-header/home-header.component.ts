import { Component, OnInit } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'abc-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss'],
  providers: [NgbDropdownConfig]
})
export class HomeHeaderComponent implements OnInit {
  isCollapsed = true;
  isLoggedIn = false;
  isAdmin = false;

  collapsed(event: any): void {
    console.log(event);
  }

  expanded(event: any): void {
    console.log(event);
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
    console.log('toggle clicked ', this.isCollapsed);
  }
  constructor(config: NgbDropdownConfig) {
    config.placement = 'bottom-right';
    //  config.autoClose = false;
  }

  ngOnInit() {}
}
