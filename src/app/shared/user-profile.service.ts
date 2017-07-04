import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/observable/fromPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/switchMap';
import {AngularFireDatabase} from 'angularfire2/database';
import * as firebase from 'firebase';
import {AngularFireAuth} from 'angularfire2/auth';

@Injectable()
export class UserProfileService {

  constructor(private db: AngularFireDatabase,
              private afAuth: AngularFireAuth) {
  }

  updateDisplayName(user: firebase.User, displayName: string): Observable<void | string> {
    return Observable.fromPromise(user.updateProfile({displayName: displayName, photoURL: null}))
      .do((res) => console.log)
      .switchMap(() => this.db.object('users/' + user.uid).set({username: displayName}))
      .switchMap(() => this.db.object('usernames/' + displayName).set(user.uid))
      .catch((error, obSerror) => {
        if (error.code === 'PERMISSION_DENIED') {
          Observable.fromPromise(user.updateProfile({displayName: null, photoURL: null}))
            .do((res) => console.log)
            .switchMap(() => this.db.object('users/' + user.uid).set({username: null}))
            .switchMap(() => this.db.object('usernames/' + displayName).set(null))
        }
        return Observable.of('Error: Username already in use');
      })
  }

  checkUsername(user: firebase.User, displayName: string) {
    const usernames = this.db.list('usernames');
    console.log(usernames);
  }
}

//   this.af.database.object('users/' + action.payload.user.uid).set({
//                                                                     username: action.payload.action.payload.username
// })),
// Observable.fromPromise(<Promise<any>>this.af.database.object
// ('usernames/' + action.payload.action.payload.username).set(action.payload.user.uid)),
//   Observable.of(action.payload)
//
// }
