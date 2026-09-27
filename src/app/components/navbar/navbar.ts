import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GlowingButton } from '../glowing-button/glowing-button';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, GlowingButton],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  viewportScroller = inject(ViewportScroller);

  isOpened = signal<boolean>(false);

  openNavMenu(): void {
    this.isOpened.update((isOpen) => !isOpen);
  }
  closeNavMenu(): void {
    this.isOpened.set(false);
  }
  scrollToAnchor(elementId: string) {
    this.viewportScroller.scrollToAnchor(elementId); 
  }

  scrollToAnchorInMobile(elementId: string) {
    this.isOpened.set(false);
    this.viewportScroller.scrollToAnchor(elementId); 
  }
}
