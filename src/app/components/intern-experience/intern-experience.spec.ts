import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternExperience } from './intern-experience';

describe('InternExperience', () => {
  let component: InternExperience;
  let fixture: ComponentFixture<InternExperience>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternExperience],
    }).compileComponents();

    fixture = TestBed.createComponent(InternExperience);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
