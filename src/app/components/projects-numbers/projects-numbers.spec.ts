import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsNumbers } from './projects-numbers';

describe('ProjectsNumbers', () => {
  let component: ProjectsNumbers;
  let fixture: ComponentFixture<ProjectsNumbers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsNumbers],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsNumbers);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
