import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { FormGroup } from '@angular/forms';
import { Game } from '../models/game.model';
import { UserService } from './user.service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/observable/fromPromise';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GamesService {

  constructor(private db: AngularFireDatabase,
              private userService: UserService) {
  }

  createGame(formGroup: FormGroup) {
    const games: FirebaseListObservable<Game[]> = this.db.list('games');
    const gameCreator: Observable<firebase.User> = this.userService.getFirebaseUser();

    return gameCreator.map((user) => {
      return Observable.of(
        games.push({
          gameName: formGroup.get('gameName').value,
          numberOfPlayers: formGroup.get('numberOfPlayers').value,
          protectGameWithPassword: formGroup.get('protectGameWithPassword').value,
          gamePassword: formGroup.get('gamePassword').value,
          creatorId: user.uid,
          creatorDisplayName: user.displayName,
        })
        // Create a join for users in games
          .then((game) => {
            this.db.object('joinedUsers/' + game.key).set({[user.uid]: user.displayName});
          })
      );
    });
  }

  // Returns the current game$
  getGame(gameUid): Observable<Game> {
    return this.db.object(`games/${gameUid}`)
  }

  // Returns all games in reversed order(newst first)
  getGameList(): Observable<Game[]> {
    return this.db.list('games').map((gameList) => {
      return gameList.reverse()
    });
  }

  // Todo make the obseravable complete
  addUserToGame(gameUid: string, user: firebase.User): Observable<boolean> {
    return Observable.fromPromise(
      this.db.object(`joinedUsers/${gameUid}/`).update({[user.uid]: {username: user.displayName, count: 0}})
    )
      .map(() => true)
      .catch(err => {
        return Observable.of(false);
      })
      .take(1);
  }

  // addUserToGame(gameUid: string, user: firebase.User): any {
  //   return this.db.object(`joinedUsers/${gameUid}/${user.uid}`)
  //     .map((mappedUser) => {
  //       // if (!mappedUser.$exists) {
  //       return this.db.object(`joinedUsers/${gameUid}/`)
  //         .update({
  //           [user.uid]: {username: user.displayName, count: 0}
  //         }).then((res) => {
  //           console.log(res);
  //         })
  //         .catch(error => {
  //           console.log(error);
  //         })
  //       // } else {
  //       //   return this.db.object(`joinedUsers/${gameUid}/${user.uid}`)
  //       //   // .update({count: ++mappedUser.count})
  //       // }
  //     }).take(1);
  //
  // }


  removeUSerFromGame(gameUid: string, user: firebase.User): Observable<void> {
    return Observable.fromPromise(
      this.db.object(`joinedUsers/${gameUid}/${user.uid}`)
        .remove()
    )
      .take(1);
  }

  getJoinedUsers(gameUid$) {
    return gameUid$.switchMap((gameUid) => this.db.list(`joinedUsers/${gameUid}`));
  }


}
