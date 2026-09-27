import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-technology-chip',
  imports: [MatIconModule],
  templateUrl: './technology-chip.html',
  styleUrl: './technology-chip.css',
})
export class TechnologyChip {
  @Input({required: true}) technologyName: string = '';
}
