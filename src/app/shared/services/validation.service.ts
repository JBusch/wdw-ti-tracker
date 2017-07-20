import {Injectable} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {AngularFireDatabase} from 'angularfire2/database';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import {Observable} from 'rxjs/Observable';
import {AngularFireAuth} from 'angularfire2/auth';

@Injectable()
export class ValidationService {

  constructor(private db: AngularFireDatabase,
              private afAuth: AngularFireAuth) {
  }

  validateEmailInUse(form: FormGroup) {
    return form.valueChanges
      .debounceTime(400)
      .switchMap((formvalue) => {
        return Observable.fromPromise(this.afAuth.auth.fetchProvidersForEmail(formvalue.email))
          .catch((error, caught) => {
            return Observable.of(false);
          });
      })
      .switchMap((result) => {
        return result && result.length ? Observable.of(true) : Observable.of(false)
      })
  }

  validateUsernameInUse(form: FormGroup) {
    return form.valueChanges
      .debounceTime(400)
      .switchMap((formValue) => this.db.list('usernames'), (formValue, listOfUsernames) => {
        console.log(formValue);
        console.log(listOfUsernames);
        const listOfUsernamesLength = listOfUsernames.length;
        for (let i = 0; i < listOfUsernamesLength; i++) {
          if (listOfUsernames[i].$key === formValue.displayName) {
            // username in use, so send error
            return true;
          }
        }
        // username not in use, so go on with regeistration
        return false;
      })
  }
}
