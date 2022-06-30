import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseRoutineComponent } from './exercise-routine.component';

describe('ExerciseSupermanComponent', () => {
  let component: ExerciseRoutineComponent;
  let fixture: ComponentFixture<ExerciseRoutineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciseRoutineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseRoutineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
