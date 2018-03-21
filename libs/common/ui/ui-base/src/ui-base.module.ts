import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HomeContentComponent } from '@abcfoundry/core/cockpit/cockpit-home/src/home-content/home-content.component';
import { HomeHeaderComponent } from '@abcfoundry/core/cockpit/cockpit-home/src/home-header/home-header.component';
import { HomeFooterComponent } from '@abcfoundry/core/cockpit/cockpit-home/src/home-footer/home-footer.component';

@NgModule({
  imports: [CommonModule, NgbModule, AngularFontAwesomeModule],
  exports: [NgbModule, AngularFontAwesomeModule]
})
export class UiBaseModule {}
