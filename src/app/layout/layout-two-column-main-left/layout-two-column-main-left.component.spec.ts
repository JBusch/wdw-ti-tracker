import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutTwoColumnMainLeftComponent } from './layout-two-column-main-left.component';

describe('LayoutTwoColumnMainLeftComponent', () => {
  let component: LayoutTwoColumnMainLeftComponent;
  let fixture: ComponentFixture<LayoutTwoColumnMainLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutTwoColumnMainLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutTwoColumnMainLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
