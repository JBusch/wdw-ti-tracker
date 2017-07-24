import { ProfileComponent } from "./profile/profile.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";

const routes: Routes = [
  {
    path: "reset-password",
    component: ResetPasswordComponent
  },
  {
    path: "profile",
    component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
