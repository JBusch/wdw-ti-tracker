import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ResetPasswordComponent} from './reset-password/reset-password.component';

const routes: Routes = [
  {
    path: 'reset-password',
    component: ResetPasswordComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
