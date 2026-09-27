import { Component } from '@angular/core';
import { SocialComponent } from '../social-component/social-component';
import { RevealOnScroll } from '../../shared/reveal-on-scroll';

@Component({
  selector: 'app-contact-me',
  imports: [SocialComponent, RevealOnScroll],
  templateUrl: './contact-me.html',
  styleUrl: './contact-me.css',
})
export class ContactMe {}
