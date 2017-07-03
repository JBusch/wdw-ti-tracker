import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/observable/fromPromise';

@Injectable()
export class UserProfileService {

  constructor() {
  }

  updateDisplayName(user: firebase.User, displayName: string): Observable<firebase.User> {
    return Observable.fromPromise(user.updateProfile({displayName: displayName, photoURL: null}));
  }


}
