import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutOneColumnMainComponent} from './layout-one-column-main/layout-one-column-main.component';
import {HeaderComponent} from './header/header.component';
import {SharedModule} from '../shared/shared.module';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {LayoutTwoColumnMainLeftComponent} from './layout-two-column-main-left/layout-two-column-main-left.component';
import {LayoutTwoColumnMainRightComponent} from './layout-two-column-main-right/layout-two-column-main-right.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    LayoutOneColumnMainComponent,
    HeaderComponent,
    ToolbarComponent,
    LayoutTwoColumnMainLeftComponent,
    LayoutTwoColumnMainRightComponent
  ],
  exports: [
    LayoutOneColumnMainComponent,
    HeaderComponent,
    LayoutTwoColumnMainLeftComponent,
    LayoutTwoColumnMainRightComponent
  ]
})
export class LayoutModule {
}
