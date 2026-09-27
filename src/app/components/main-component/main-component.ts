import { Component } from '@angular/core';
import { GlowingButton } from '../glowing-button/glowing-button';
import { ColoredBlobs } from '../colored-blobs/colored-blobs';

@Component({
  selector: 'app-main-component',
  imports: [ColoredBlobs],
  templateUrl: './main-component.html',
  styleUrl: './main-component.css',
})
export class MainComponent {}
