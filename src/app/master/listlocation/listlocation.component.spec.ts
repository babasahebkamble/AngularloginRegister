import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListlocationComponent } from './listlocation.component';

describe('ListlocationComponent', () => {
  let component: ListlocationComponent;
  let fixture: ComponentFixture<ListlocationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListlocationComponent]
    });
    fixture = TestBed.createComponent(ListlocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
