import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseSupermanComponent } from './exercise-superman.component';

describe('ExerciseSupermanComponent', () => {
  let component: ExerciseSupermanComponent;
  let fixture: ComponentFixture<ExerciseSupermanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciseSupermanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseSupermanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
