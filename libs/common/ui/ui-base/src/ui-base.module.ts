import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NgbModule,
  NgbCarouselModule,
  NgbAlertModule
} from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    AngularFontAwesomeModule,
    NgbCarouselModule,
    NgbAlertModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2Charts
  ],
  exports: [
    NgbModule,
    NgbCarouselModule,
    NgbAlertModule,
    AngularFontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2Charts
  ]
})
export class UiBaseModule {}
