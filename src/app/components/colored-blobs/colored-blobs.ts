import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-colored-blobs',
  imports: [CommonModule],
  templateUrl: './colored-blobs.html',
  styleUrl: './colored-blobs.css',
})
export class ColoredBlobs {
  @Input() class :string = '';
}
