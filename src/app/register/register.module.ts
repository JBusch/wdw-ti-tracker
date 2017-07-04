import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegisterComponent} from './register/register.component';
import {RegisterRoutingModule} from './register-routing.module';
import {CreateProfileComponent} from './create-profile/create-profile.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RegisterRoutingModule,
    SharedModule
  ],
  declarations: [RegisterComponent, CreateProfileComponent]
})
export class RegisterModule {
}
