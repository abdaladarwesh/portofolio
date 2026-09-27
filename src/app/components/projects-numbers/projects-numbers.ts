import { Component } from '@angular/core';
import { StatComponent } from './stat-component/stat-component';

@Component({
  selector: 'app-projects-numbers',
  imports: [StatComponent],
  templateUrl: './projects-numbers.html',
  styleUrl: './projects-numbers.css',
})
export class ProjectsNumbers {}
