import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../shared/services/auth.service';
import {Observable} from 'rxjs/Observable';
import {AngularFireAuth} from 'angularfire2/auth';
import {UserService} from '../../shared/services/user.service';

@Component({
  selector: 'wdw-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user: Observable<firebase.User>;

  constructor(private authService: AuthService,
              private afAuth: AngularFireAuth,
              private userService: UserService) {
  }

  ngOnInit() {
    // this.user = this.userService.getUserUid();
  }


  logout() {
    this.authService.logout();
  }

}
