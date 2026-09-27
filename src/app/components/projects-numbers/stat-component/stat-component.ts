import { Component, ElementRef, inject, Input, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-stat-component',
  imports: [],
  templateUrl: './stat-component.html',
  styleUrl: './stat-component.css',
})
export class StatComponent implements OnInit, OnDestroy {
  @Input({ required: true }) statNumber: number = 0;
  @Input({ required: true }) stat: string = '';

  currentDisplay = signal<number>(0);

  private elementRef = inject(ElementRef);
  private observer?: IntersectionObserver;
  ngOnInit(): void {
    this.setupIntersectingObserver();
  }
  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  setupIntersectingObserver(): void {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.animateCount();
        }
      },
      { threshold: 0.2 },
    );

    this.observer?.observe(this.elementRef.nativeElement);
  }

  animateCount(): void {
    const startTime = performance.now();
    const startValue = 0;
    const endValue = this.statNumber;
    const duration = 2000;

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3); // mathematical function for easing out effect
      const calculatedValue = Math.round(startValue + (endValue - startValue) * easeProgress);
      this.currentDisplay.set(calculatedValue);
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }
}
