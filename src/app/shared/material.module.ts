import {NgModule} from '@angular/core';
import {MdButton, MdButtonModule, MdInputModule} from '@angular/material';

@NgModule({
  imports: [
    MdInputModule,
    MdButtonModule
  ],
  exports: [
    MdInputModule,
    MdButtonModule
  ]
})
export class MaterialModule {
}
