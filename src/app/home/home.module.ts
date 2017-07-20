import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {HomeRoutingModule} from './home-routing.module';
import {SharedModule} from '../shared/shared.module';
import {LayoutModule} from '../layout/layout.module';
import {GamesModule} from '../games/games.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    LayoutModule,
    GamesModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule {
}
