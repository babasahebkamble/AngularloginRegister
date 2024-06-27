import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatestatusComponent } from './createstatus.component';

describe('CreatestatusComponent', () => {
  let component: CreatestatusComponent;
  let fixture: ComponentFixture<CreatestatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatestatusComponent]
    });
    fixture = TestBed.createComponent(CreatestatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
