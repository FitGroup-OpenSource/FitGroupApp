import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyWomenComponent } from './body-women.component';

describe('BodyWomenComponent', () => {
  let component: BodyWomenComponent;
  let fixture: ComponentFixture<BodyWomenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyWomenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyWomenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
