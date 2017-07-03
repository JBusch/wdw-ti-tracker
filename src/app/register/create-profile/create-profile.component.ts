import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';
import {UserProfileService} from '../../shared/user-profile.service';

@Component({
  selector: 'wdw-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.scss']
})
export class CreateProfileComponent implements OnInit {

  form: FormGroup;
  user: firebase.User;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              public afAuth: AngularFireAuth,
              private userProfilService: UserProfileService) {
  }

  ngOnInit() {

    this.afAuth.authState.subscribe((user) => {
      this.user = user;
    });

    this.form = this.formBuilder.group({
      displayName: ['', Validators.required]
    });

  }

  setDisplayName(): void {
    this.userProfilService.updateDisplayName(this.user, this.form.value.displayName).subscribe(() => {
      this.router.navigate(['home']);
    });
  }

}
