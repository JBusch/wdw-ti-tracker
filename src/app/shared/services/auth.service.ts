import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/of';
import {MessagesService} from './messages.service';

@Injectable()
export class AuthService {

  constructor(private afAuth: AngularFireAuth,
              private messagesService: MessagesService) {

  }

  loginEmail(email: string, password: string) {
    return Observable.fromPromise(this.afAuth.auth.signInWithEmailAndPassword(email, password)
      // .catch((error) => {
      //   console.log(error);
      // })
    ).catch((err: any, caugth: Observable<any>) => {
      this.messagesService.confirm('error', 'password wrong')
      return Observable.of(err, caugth);
    });
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  signUp(email: string, password: string) {
    return Observable.fromPromise(this.afAuth.auth.createUserWithEmailAndPassword(email, password));
  }

  resetPassword(email: string): Observable<boolean> {
    return Observable.fromPromise(
      this.afAuth.auth.sendPasswordResetEmail(email)
        .catch((err) => {
          console.log(err);
        })
    )
      .map(() => true)
      .catch(() => {
        return Observable.of(true);
      });
  }
}
