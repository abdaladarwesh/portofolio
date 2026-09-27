import { Component, Input } from '@angular/core';
import { ExperienceChips } from '../../intern-experience/experience-chips/experience-chips';

@Component({
  selector: 'app-project-card',
  imports: [ExperienceChips],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {
  @Input({required: true}) img : string = '';
  @Input({required: true}) type: string = '';
  @Input({required: true}) headline: string = '';
  @Input({required: true}) body: string = '';
  @Input({required: true}) technologies: string[] = [];
  @Input({required: true}) isLive: boolean = false;
  @Input({required: true}) githubLink: string = '';
  @Input() liveUrl: string = ''
}
