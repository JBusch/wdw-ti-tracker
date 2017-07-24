// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
//
// import { RegisterComponent } from './register.component';
// import { AngularFireDatabaseModule } from 'angularfire2/database';
// import { AngularFireModule } from 'angularfire2';
// import { environment } from '../../../environments/environment';
// import { ReactiveFormsModule } from '@angular/forms';
// import { RouterTestingModule } from '@angular/router/testing';
// import { NO_ERRORS_SCHEMA } from '@angular/core';
// import { AngularFireAuth } from 'angularfire2/auth';
// import { UserService } from '../../shared/services/user.service';
// import { ValidationService } from '../../shared/services/validation.service';
// import { AuthService } from '../../shared/services/auth.service';
// import { MessagesService } from '../../shared/services/messages.service';
//
// describe('RegisterComponent', () => {
//   let component: RegisterComponent;
//   let fixture: ComponentFixture<RegisterComponent>;
//
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       imports: [
//         ReactiveFormsModule,
//         RouterTestingModule,
//         AngularFireModule.initializeApp(environment.firebase),
//         AngularFireDatabaseModule
//       ],
//       providers: [
//         AngularFireAuth,
//         UserService,
//         ValidationService,
//         AuthService,
//         MessagesService
//       ],
//       declarations: [RegisterComponent],
//       schemas: [NO_ERRORS_SCHEMA]
//     })
//       .compileComponents();
//   }));
//
//   beforeEach(() => {
//     fixture = TestBed.createComponent(RegisterComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });
//
//   it('should be created', () => {
//     expect(component).toBeTruthy();
//   });
// });
