import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { errorLoginComponent } from './errorLogin.component';

describe('errorLoginComponent', () => {
  let component: errorLoginComponent;
  let fixture: ComponentFixture<errorLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ errorLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(errorLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
