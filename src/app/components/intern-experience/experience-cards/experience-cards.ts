import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RevealOnScroll } from '../../../shared/reveal-on-scroll';

@Component({
  selector: 'app-experience-cards',
  imports: [MatIconModule],
  templateUrl: './experience-cards.html',
  styleUrl: './experience-cards.css',
})
export class ExperienceCards {
  @Input({required: true}) icon :string  = '';
  @Input({required: true}) title:string  = '';
  @Input({required: true}) experience:string  = '';
}
