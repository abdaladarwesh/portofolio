import { Component, inject } from '@angular/core';
import { ProjectCard } from './project-card/project-card';
import { RevealOnScroll } from '../../shared/reveal-on-scroll';
import { ProjectsService } from '../../services/projects-service';

@Component({
  selector: 'app-projects',
  imports: [ProjectCard, RevealOnScroll],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projectsService = inject(ProjectsService);

  

}
