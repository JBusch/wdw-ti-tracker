import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGamesComponent } from './list-games.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AppModule } from '../../app.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('ListGamesComponent', () => {
  let component: ListGamesComponent;
  let fixture: ComponentFixture<ListGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, RouterTestingModule],
      declarations: [ListGamesComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
