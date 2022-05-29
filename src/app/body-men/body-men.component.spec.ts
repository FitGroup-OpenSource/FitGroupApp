import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyMenComponent } from './body-men.component';

describe('BodyMenComponent', () => {
  let component: BodyMenComponent;
  let fixture: ComponentFixture<BodyMenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyMenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyMenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
