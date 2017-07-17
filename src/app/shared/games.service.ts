import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';

@Injectable()
export class GamesService {
  // TODO make typesafe
  // TODO create model

  games;

  constructor(private db: AngularFireDatabase) {
  }

  // TODO make typesafe
  createGame(formValue) {
    this.games = this.db.list('games');

    this.games.push({
      gameName: 'TestGame',
      numberOfPlayers: 7,
      protectGameWithPassword: true,
      gamePassword: 'asdasdasd'
    })
  }

}
