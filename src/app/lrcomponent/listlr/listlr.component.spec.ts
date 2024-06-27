import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListlrComponent } from './listlr.component';

describe('ListlrComponent', () => {
  let component: ListlrComponent;
  let fixture: ComponentFixture<ListlrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListlrComponent]
    });
    fixture = TestBed.createComponent(ListlrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
