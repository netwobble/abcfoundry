import { Component, OnInit, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {
  @Input() heading: string;
  @Input() icon: string;
  @Input() link_icon = 'fa-dashboard';
  @Input() link_heading = 'Dashboard';
  @Input() link = '/business/home';

  constructor() {}

  ngOnInit() {}
}
