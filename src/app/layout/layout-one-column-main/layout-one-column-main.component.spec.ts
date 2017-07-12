import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutOneColumnMainComponent } from './layout-one-column-main.component';

describe('LayoutOneColumnMainComponent', () => {
  let component: LayoutOneColumnMainComponent;
  let fixture: ComponentFixture<LayoutOneColumnMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutOneColumnMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutOneColumnMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
