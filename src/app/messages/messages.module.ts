import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {errorLoginComponent} from './errorLogin/errorLogin.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [errorLoginComponent],
  exports: [errorLoginComponent],
  entryComponents: [
    errorLoginComponent
  ]
})
export class MessagesModule {
}
