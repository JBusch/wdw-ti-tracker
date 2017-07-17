import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutOneColumnMainComponent} from './layout-one-column-main/layout-one-column-main.component';
import {HeaderComponent} from './header/header.component';
import {SharedModule} from '../shared/shared.module';
import {ToolbarComponent} from './toolbar/toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [LayoutOneColumnMainComponent, HeaderComponent, ToolbarComponent],
  exports: [LayoutOneColumnMainComponent, HeaderComponent]
})
export class LayoutModule {
}
