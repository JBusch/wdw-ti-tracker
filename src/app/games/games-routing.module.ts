import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {GamesComponent} from './games/games.component';
import {CreateGameComponent} from './create-game/create-game.component';

const routes: Routes = [
  {
    path: '',
    component: GamesComponent
  },
  {
    path: 'create-game',
    component: CreateGameComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule {
}
