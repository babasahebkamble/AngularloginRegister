import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListlrstatusComponent } from './listlrstatus.component';

describe('ListlrstatusComponent', () => {
  let component: ListlrstatusComponent;
  let fixture: ComponentFixture<ListlrstatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListlrstatusComponent]
    });
    fixture = TestBed.createComponent(ListlrstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
