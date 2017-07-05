import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../shared/auth.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {ValidationService} from '../../shared/validation.service';

@Component({
  selector: 'wdw-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  errorEmailInUse$: Observable<boolean>;
  formErrors = {
    'email': '',
    'password': '',
    'confirm': ''
  };
  validationMessages = {
    'name': {
      'required': 'Name is required.',
      'minlength': 'Name must be at least 4 characters long.',
      'maxlength': 'Name cannot be more than 24 characters long.',
      'forbiddenName': 'Someone named "Bob" cannot be a hero.'
    },
    'email': {
      'required': 'Email is required.'
    }
  };


  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private validationService: ValidationService) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirm: ['', Validators.required]
    });

    this.errorEmailInUse$ = this.validationService.validateEmailInUse(this.form);

    this.form.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now

  }


  onValueChanged(data?: any) {
    if (!this.form) {
      return;
    }
    const form = this.form;

    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);

        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

  signUp() {
    this.authService.signUp(this.form.value.email, this.form.value.password)
      .subscribe(() => {
        this.router.navigate(['register/finish-profile']);
      });
  }

  isPasswordMatch() {
    return this.form.value.password === this.form.value.confirm && this.form.value.password !== '';
  }


}
