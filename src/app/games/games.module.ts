import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesComponent } from './games/games.component';
import { GameComponent } from './game/game.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GamesComponent, GameComponent]
})
export class GamesModule { }
