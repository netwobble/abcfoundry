import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {
  NgbModule,
  NgbCarouselModule,
  NgbAlertModule
} from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule as Ng2Charts } from 'ng2-charts';
import {PageHeaderComponent} from "./page-header/page-header.component";

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    AngularFontAwesomeModule,
    NgbCarouselModule,
    NgbAlertModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2Charts,
    RouterModule
  ],
  declarations: [
    PageHeaderComponent
  ],
  exports: [
    NgbModule,
    NgbCarouselModule,
    NgbAlertModule,
    AngularFontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2Charts,
    PageHeaderComponent
  ]
})
export class UiBaseModule {}
