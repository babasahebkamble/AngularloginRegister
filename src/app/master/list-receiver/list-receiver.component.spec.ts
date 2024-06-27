import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListReceiverComponent } from './list-receiver.component';

describe('ListReceiverComponent', () => {
  let component: ListReceiverComponent;
  let fixture: ComponentFixture<ListReceiverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListReceiverComponent]
    });
    fixture = TestBed.createComponent(ListReceiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
