import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'abc-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.scss']
})
export class HomeContentComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    // TODO connect to the named router aoutlet when router bug is fixed
    // need to get bug number to track
    // this.router.navigate(['/cockpit/home', { outlets: { topview: [ 'header' ], bottomview: [ 'footer' ] }}]);
  }
}
