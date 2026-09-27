import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColoredBlobs } from './colored-blobs';

describe('ColoredBlobs', () => {
  let component: ColoredBlobs;
  let fixture: ComponentFixture<ColoredBlobs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColoredBlobs],
    }).compileComponents();

    fixture = TestBed.createComponent(ColoredBlobs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
