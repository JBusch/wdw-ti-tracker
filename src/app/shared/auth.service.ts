import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';

@Injectable()
export class AuthService {

  constructor(private afAuth: AngularFireAuth) {

  }

  loginEmail(email: string, password: string) {
    return Observable.fromPromise(this.afAuth.auth.signInWithEmailAndPassword(email, password));
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  signUp(email: string, password: string) {
    return Observable.fromPromise(this.afAuth.auth.createUserWithEmailAndPassword(email, password));
  }

  setDisplayName(displayName: string){
    this.afAuth
  }

}
