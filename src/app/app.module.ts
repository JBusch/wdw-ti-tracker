import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {AuthService} from './shared/services/auth.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {UserService} from './shared/services/user.service';
import {ValidationService} from './shared/services/validation.service';
import {SharedModule} from './shared/shared.module';
import {LayoutModule} from './layout/layout.module';

import 'hammerjs';
import {MessagesService} from './shared/services/messages.service';
import {MessagesModule} from './messages/messages.module';
import {GamesService} from './shared/services/games.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    SharedModule,
    LayoutModule,
    MessagesModule
  ],
  providers: [
    AuthService,
    UserService,
    ValidationService,
    MessagesService,
    GamesService
  ],
  exports: [
    LayoutModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
