import {Component, OnDestroy, OnInit} from '@angular/core';
import {GamesService} from '../../shared/services/games.service';
import {Observable} from 'rxjs/Observable';
import {Game} from '../../shared/models/game.model';
import {ActivatedRoute} from '@angular/router';
import {AuthService} from '../../shared/services/auth.service';
import {UserService} from '../../shared/services/user.service';
import 'rxjs/add/operator/switchMap';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'wdw-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, OnDestroy {

  game: Observable<Game>;
  gameUsers: Subscription;

  constructor(private gamesService: GamesService,
              private authService: AuthService,
              private userService: UserService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.game = this.activatedRoute.params
      .map((params) => params.uid)
      .switchMap((gameUid) => {
        return this.gamesService.getGame(gameUid);
      });

    // TODO this never completes
    this.gameUsers = this.game
      .switchMap((game) =>
          this.userService.getFirebaseUser(), (game, user) => {
          return {game: game.$key, user: user}
        }
      ).switchMap(({game, user}) => {
        // const {game: g, user: u} = {game, user};
        return this.gamesService.addUserToGame(game, user);
      })
      .subscribe((res) => {
          console.log(res);
        }, error => console.log(error),
        () => {
          console.log('completed');
        });
  }

  ngOnDestroy() {
    this.gameUsers.unsubscribe();

    this.game
      .switchMap((game) =>
          this.userService.getFirebaseUser(), (game, user) => {
          return {game: game.$key, user: user}
        }
      ).switchMap(({game, user}) => {
      // const {game: g, user: u} = {game, user};
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
