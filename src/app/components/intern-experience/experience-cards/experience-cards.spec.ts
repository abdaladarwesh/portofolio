import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceCards } from './experience-cards';

describe('ExperienceCards', () => {
  let component: ExperienceCards;
  let fixture: ComponentFixture<ExperienceCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceCards],
    }).compileComponents();

    fixture = TestBed.createComponent(ExperienceCards);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
