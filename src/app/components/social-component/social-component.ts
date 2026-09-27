import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social-component',
  imports: [],
  templateUrl: './social-component.html',
  styleUrl: './social-component.css',
})
export class SocialComponent {
  @Input({required: true}) url : string = '';
}
