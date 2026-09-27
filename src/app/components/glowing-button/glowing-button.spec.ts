import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlowingButton } from './glowing-button';

describe('GlowingButton', () => {
  let component: GlowingButton;
  let fixture: ComponentFixture<GlowingButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlowingButton],
    }).compileComponents();

    fixture = TestBed.createComponent(GlowingButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
