import { Subscription } from "rxjs/Subscription";
import { UserService } from "./../../shared/services/user.service";
import { Form, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../shared/services/auth.service";
import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "wdw-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: [""],
      email: ["", Validators.required]
    });

    this.userService.getFirebaseUser().subscribe(user => {
      this.form.controls["username"].setValue(user.displayName);
      this.form.controls["email"].setValue(user.email);
    });
  }

  updateForm(form: FormGroup) {}
}
