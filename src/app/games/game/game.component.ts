import { Component, OnDestroy, OnInit } from '@angular/core';
import { GamesService } from '../../shared/services/games.service';
import { Observable } from 'rxjs/Observable';
import { Game } from '../../shared/models/game.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../shared/services/user.service';
import 'rxjs/add/operator/switchMap';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'wdw-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, OnDestroy {

  game$: Observable<Game>;
  gameKey$;
  joinAndRemoveUsersToGame$: Subscription;
  usersJoinedCount$;

  constructor(private gamesService: GamesService,
              private userService: UserService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.game$ = this.activatedRoute.params
      .map((params) => params.uid)
      .switchMap((gameUid) => {
        return this.gamesService.getGame(gameUid);
      });

    this.gameKey$ = this.game$.map(game => game.$key);

    this.usersJoinedCount$ = this.gamesService.getJoinedUsers(this.gameKey$);

  }

  ngOnDestroy() {
    // this.joinAndRemoveUsersToGame$.unsubscribe();

    // Remove Users from the game when he leaves the page elsewhere
    this.game$
      .switchMap((game) =>
          this.userService.getFirebaseUser(), (game, user) => {
          return {game: game.$key, user: user}
        }
      ).switchMap(({game, user}) => {
      // const {game$: g, user: u} = {game$, user};
      return this.gamesService.removeUSerFromGame(game, user);
    })
      .subscribe((res) => {
          console.log(res);
        }, error => console.log(error),
        () => {
          console.log('completed');
        });

  }
}
