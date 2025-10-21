import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seccion6 } from './seccion6';

describe('Seccion6', () => {
  let component: Seccion6;
  let fixture: ComponentFixture<Seccion6>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Seccion6]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Seccion6);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
