import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChratComponent } from './chrat.component';

describe('ChratComponent', () => {
  let component: ChratComponent;
  let fixture: ComponentFixture<ChratComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChratComponent]
    });
    fixture = TestBed.createComponent(ChratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
