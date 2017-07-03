import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RegisterComponent} from './register/register.component';
import {CreateProfileComponent} from './create-profile/create-profile.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterComponent,
    children: [],
  },
  {
    path: 'finish-profile',
    component: CreateProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule {
}
