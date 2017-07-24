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

    // Add User to game on join
    return firebaseUser.switchMap((user) => {
      return this.gamesService.addUserToGame(gameUid, user);
    });
  }
}
