import { CommonModule } from '@angular/common';
import { Component, Input,} from '@angular/core';

@Component({
  selector: 'app-glowing-button',
  imports: [CommonModule],
  templateUrl: './glowing-button.html',
  styleUrl: './glowing-button.css',
})
export class GlowingButton {
  @Input({ required: true }) buttonContent: string = '';
  @Input() isMobile: boolean = true;
}
