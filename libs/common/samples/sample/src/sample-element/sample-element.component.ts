import { Component, OnInit } from '@angular/core';
import {routerTransition} from "@abcfoundry/common/ui/ui-base";

@Component({
  selector: 'sample-element',
  templateUrl: './sample-element.component.html',
  styleUrls: ['./sample-element.component.scss'],
  animations: [routerTransition()]
})
export class SampleElementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
