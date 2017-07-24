import { TestBed, async, inject } from '@angular/core/testing';

import { RoomGuard } from './room.guard';
import { GamesService } from '../services/games.service';
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../../environments/environment';
import { UserService } from '../services/user.service';
import { AngularFireAuth } from 'angularfire2/auth';

describe('RoomGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule
      ],
      providers: [
        RoomGuard,
        GamesService,
        UserService,
        AngularFireAuth
      ]
    });
  });

  it('should ...', inject([RoomGuard], (guard: RoomGuard) => {
    expect(guard).toBeTruthy();
  }));
});
