import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";
import { UserRoutingModule } from "./user-routing.module";
import { SharedModule } from "../shared/shared.module";
import { LayoutModule } from "../layout/layout.module";
import { ProfileComponent } from "./profile/profile.component";

@NgModule({
  imports: [CommonModule, SharedModule, LayoutModule, UserRoutingModule],
  declarations: [ResetPasswordComponent, ProfileComponent],
  exports: [ProfileComponent, ResetPasswordComponent]
})
export class UserModule {}
