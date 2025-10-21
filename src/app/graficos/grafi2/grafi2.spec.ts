import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grafi2 } from './grafi2';

describe('Grafi2', () => {
  let component: Grafi2;
  let fixture: ComponentFixture<Grafi2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Grafi2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Grafi2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
