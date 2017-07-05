import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';
import {UserProfileService} from '../../shared/user-profile.service';
import 'rxjs/add/operator/debounceTime';
import {ValidationService} from '../../shared/validation.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'wdw-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.scss']
})
export class CreateProfileComponent implements OnInit {

  form: FormGroup;
  user: firebase.User;
  errorUsernameInUse$: Observable<boolean>;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              public afAuth: AngularFireAuth,
              private userProfileService: UserProfileService,
              private validationService: ValidationService) {
  }

  ngOnInit() {

    this.afAuth.authState.subscribe((user) => {
      this.user = user;
    });

    this.form = this.formBuilder.group({
      displayName: ['', Validators.required]
    });

    this.form.valueChanges.debounceTime(400).subscribe((value) => console.log);

    this.errorUsernameInUse$ = this.validationService.validateUsernameInUse(this.form);

  }

  setDisplayName(): void {
    this.userProfileService.updateDisplayName(this.user, this.form.value.displayName).subscribe((result) => {
      this.router.navigate(['home']);
    });
  }
}
