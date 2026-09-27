import { Component } from '@angular/core';
import { ExperienceChips } from './experience-chips/experience-chips';
import { ExperienceCards } from './experience-cards/experience-cards';
import { RevealOnScroll } from '../../shared/reveal-on-scroll';

@Component({
  selector: 'app-intern-experience',
  imports: [ExperienceChips, ExperienceCards, RevealOnScroll],
  templateUrl: './intern-experience.html',
  styleUrl: './intern-experience.css',
})
export class InternExperience {}
