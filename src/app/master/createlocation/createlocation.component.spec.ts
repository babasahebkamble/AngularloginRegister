import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatelocationComponent } from './createlocation.component';

describe('CreatelocationComponent', () => {
  let component: CreatelocationComponent;
  let fixture: ComponentFixture<CreatelocationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatelocationComponent]
    });
    fixture = TestBed.createComponent(CreatelocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
