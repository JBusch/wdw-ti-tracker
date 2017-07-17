import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GamesComponent} from './games/games.component';
import {GameComponent} from './game/game.component';
import {CreateGameComponent} from './create-game/create-game.component';
import {JoinGameComponent} from './join-game/join-game.component';
import {ListGamesComponent} from './list-games/list-games.component';
import {GamesRoutingModule} from './games-routing.module';
import {LayoutModule} from '../layout/layout.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    GamesRoutingModule,
    LayoutModule,
    SharedModule
  ],
  declarations: [
    GamesComponent,
    GameComponent,
    CreateGameComponent,
    JoinGameComponent,
    ListGamesComponent
  ]
})
export class GamesModule {
}
