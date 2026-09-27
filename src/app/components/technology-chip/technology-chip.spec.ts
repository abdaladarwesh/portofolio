import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyChip } from './technology-chip';

describe('TechnologyChip', () => {
  let component: TechnologyChip;
  let fixture: ComponentFixture<TechnologyChip>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnologyChip],
    }).compileComponents();

    fixture = TestBed.createComponent(TechnologyChip);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
