import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';
import {UserService} from '../../shared/services/user.service';
import 'rxjs/add/operator/debounceTime';
import {ValidationService} from '../../shared/services/validation.service';
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
              private userProfileService: UserService,
              private validationService: ValidationService) {
  }

  ngOnInit() {
    this.afAuth.authState.subscribe((user) => {
      this.user = user;
    });

    this.form = this.formBuilder.group({
      displayName: ['', Validators.required]
    });

    this.errorUsernameInUse$ = this.validationService.validateUsernameInUse(this.form);
  }

  setDisplayName(): void {
    // since in the moment, the user clicks on the button with a valid username,
    // the username gets updated in firebase and the condition turns to true, which shows a wrong error message
    this.errorUsernameInUse$ = Observable.of(false);
    this.userProfileService.updateDisplayName(this.user, this.form.value.displayName).subscribe((result) => {
      this.router.navigate(['home']);
    });
  }
}
