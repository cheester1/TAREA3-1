import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grafi1 } from './grafi1';

describe('Grafi1', () => {
  let component: Grafi1;
  let fixture: ComponentFixture<Grafi1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Grafi1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Grafi1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
