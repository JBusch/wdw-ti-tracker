import {Component, OnInit} from '@angular/core';
import {GamesService} from '../../shared/services/games.service';
import {Observable} from 'rxjs/Observable';
import {Game} from '../../shared/models/game.model';

@Component({
  selector: 'wdw-list-games',
  templateUrl: './list-games.component.html',
  styleUrls: ['./list-games.component.scss']
})
export class ListGamesComponent implements OnInit {

  gameList: Observable<Game[]>;

  constructor(private gamesService: GamesService) {
  }

  ngOnInit() {
    this.gameList = this.gamesService.getGameList();
  }

}
