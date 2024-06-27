import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LrviewComponent } from './lrview.component';

describe('LrviewComponent', () => {
  let component: LrviewComponent;
  let fixture: ComponentFixture<LrviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LrviewComponent]
    });
    fixture = TestBed.createComponent(LrviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
