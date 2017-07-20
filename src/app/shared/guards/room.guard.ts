import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { GamesService } from '../services/games.service';
import { UserService } from '../services/user.service';

@Injectable()
export class RoomGuard implements CanActivate {

  constructor(private gamesService: GamesService,
              private userService: UserService) {

  }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    const gameUid = next.params.uid;
    const firebaseUser = this.userService.getFirebaseUser();

    console.log(next, state);

    // TODO this never completes, also it sucks, because it dos not handle users which open two windows
    // if a user leaves one window, but is in the room in another one, he gets disconected anyway...
    // Add User to gmae on join
    return firebaseUser.switchMap((user) => {
      // const {game$: g, user: u} = {game$, user};
      return this.gamesService.addUserToGame(gameUid, user);
    });
    // .subscribe((res) => {
    //     return res;
    //   }, error => console.log(error),
    //   () => {
    //     console.log('completed');
    //   });

    // return true;
  }
}
