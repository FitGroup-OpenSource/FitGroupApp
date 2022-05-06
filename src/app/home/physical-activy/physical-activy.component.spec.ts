import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalActivyComponent } from './physical-activy.component';

describe('PhysicalActivyComponent', () => {
  let component: PhysicalActivyComponent;
  let fixture: ComponentFixture<PhysicalActivyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhysicalActivyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicalActivyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
