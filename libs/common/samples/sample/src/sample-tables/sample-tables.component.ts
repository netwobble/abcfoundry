import { Component, OnInit } from '@angular/core';
import {routerTransition} from "@abcfoundry/common/ui/ui-base";

@Component({
  selector: 'sample-tables',
  templateUrl: './sample-tables.component.html',
  styleUrls: ['./sample-tables.component.scss'],
  animations: [routerTransition()]
})
export class SampleTablesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
