import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLrComponent } from './edit-lr.component';

describe('EditLrComponent', () => {
  let component: EditLrComponent;
  let fixture: ComponentFixture<EditLrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditLrComponent]
    });
    fixture = TestBed.createComponent(EditLrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
