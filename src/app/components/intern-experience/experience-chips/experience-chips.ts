import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-experience-chip',
  imports: [],
  templateUrl: './experience-chips.html',
  styleUrl: './experience-chips.css',
})
export class ExperienceChips {
  @Input({required: true}) experienceName :string = '';
}
