import { Component } from '@angular/core';
import { TechnologyChip } from '../technology-chip/technology-chip';
import { RevealOnScroll } from '../../shared/reveal-on-scroll';

@Component({
  selector: 'app-about-me',
  imports: [TechnologyChip, RevealOnScroll],
  templateUrl: './about-me.html',
  styleUrl: './about-me.css',
})
export class AboutMe {}
