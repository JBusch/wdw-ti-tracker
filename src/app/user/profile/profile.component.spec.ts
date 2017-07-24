// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
//
// import { ProfileComponent } from './profile.component';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { NO_ERRORS_SCHEMA } from '@angular/core';
// import { AngularFireAuth } from 'angularfire2/auth';
// import { AuthService } from '../../shared/services/auth.service';
// import { AngularFireModule } from 'angularfire2';
// import { environment } from '../../../environments/environment';
// import { AngularFireDatabaseModule } from 'angularfire2/database';
// import { MessagesService } from '../../shared/services/messages.service';
//
// describe('ProfileComponent', () => {
//   let component: ProfileComponent;
//   let fixture: ComponentFixture<ProfileComponent>;
//
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       imports: [
//         ReactiveFormsModule,
//         FormsModule,
//         AngularFireModule.initializeApp(environment.firebase),
//         AngularFireDatabaseModule
//       ],
//       declarations: [ProfileComponent],
//       providers: [
//         AngularFireAuth,
//         AuthService,
//         MessagesService
//       ],
//       schemas: [NO_ERRORS_SCHEMA]
//     })
//       .compileComponents();
//   }));
//
//   beforeEach(() => {
//     fixture = TestBed.createComponent(ProfileComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });
//
//   it('should be created', () => {
//     expect(component).toBeTruthy();
//   });
// });
