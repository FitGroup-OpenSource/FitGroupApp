import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsRoutineComponent } from './abs-routine.component';

describe('AbsRoutineComponent', () => {
  let component: AbsRoutineComponent;
  let fixture: ComponentFixture<AbsRoutineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbsRoutineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbsRoutineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
