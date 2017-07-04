import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';
import {UserProfileService} from '../../shared/user-profile.service';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'wdw-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.scss']
})
export class CreateProfileComponent implements OnInit {

  form: FormGroup;
  user: firebase.User;
  errorUsernameInUse = false;


  constructor(private formBuilder: FormBuilder,
              private router: Router,
              public afAuth: AngularFireAuth,
              private userProfileService: UserProfileService) {
  }

  ngOnInit() {

    this.afAuth.authState.subscribe((user) => {
      this.user = user;
    });

    this.form = this.formBuilder.group({
      displayName: ['', Validators.required]
    });

    this.form.valueChanges.debounceTime(400).subscribe((value) => console.log);

  }

  setDisplayName(): void {
    this.userProfileService.updateDisplayName(this.user, this.form.value.displayName).subscribe((result) => {
      if (result === 'Error: Username already in use') {
        this.errorUsernameInUse = true;
      } else {
        this.router.navigate(['home']);
      }
    });
  }

}
