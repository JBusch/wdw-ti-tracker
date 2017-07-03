import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../shared/auth.service';
import {Observable} from 'rxjs/Observable';
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'wdw-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user: Observable<firebase.User>;

  constructor(private authService: AuthService,
              public afAuth: AngularFireAuth) {
  }

  ngOnInit() {
    this.user = this.afAuth.authState;

    console.log(this.user);
  }

  logout() {
    this.authService.logout();
  }

}
