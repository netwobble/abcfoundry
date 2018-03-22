import { Component, OnInit } from '@angular/core';
import {routerTransition} from "@abcfoundry/common/ui/ui-base";

@Component({
  selector: 'sample-forms',
  templateUrl: './sample-forms.component.html',
  styleUrls: ['./sample-forms.component.scss'],
  animations: [routerTransition()]
})
export class SampleFormsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
