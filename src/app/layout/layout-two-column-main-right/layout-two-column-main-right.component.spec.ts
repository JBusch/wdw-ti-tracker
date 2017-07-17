import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutTwoColumnMainRightComponent } from './layout-two-column-main-right.component';

describe('LayoutTwoColumnMainRightComponent', () => {
  let component: LayoutTwoColumnMainRightComponent;
  let fixture: ComponentFixture<LayoutTwoColumnMainRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutTwoColumnMainRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutTwoColumnMainRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
