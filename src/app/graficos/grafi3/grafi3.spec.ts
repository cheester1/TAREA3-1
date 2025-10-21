import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grafi3 } from './grafi3';

describe('Grafi3', () => {
  let component: Grafi3;
  let fixture: ComponentFixture<Grafi3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Grafi3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Grafi3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
