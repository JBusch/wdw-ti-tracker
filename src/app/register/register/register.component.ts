import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../shared/auth.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'wdw-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {

    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirm: ['', Validators.required]
    });

  }

  signUp() {
    this.authService.signUp(this.form.value.email, this.form.value.password)
      .subscribe(() => {
        this.router.navigate(['register/finish-profile']);
      });
  }

  isPasswordMatch() {
    console.log(this.form.value);
    return this.form.value.password === this.form.value.confirm && this.form.value.password !== '';
  }


}
