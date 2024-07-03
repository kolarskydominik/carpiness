import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CtaButtonComponent } from '../cta-button/cta-button.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sticky-animation-section',
  standalone: true,
  templateUrl: './sticky-animation-section.component.html',
  styleUrl: './sticky-animation-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, CtaButtonComponent, RouterModule],
})
export class StickyAnimationSectionComponent implements AfterViewInit {
  ngAfterViewInit() {
    gsap.registerPlugin(ScrollTrigger);

    // Set initial states
    gsap.set('#svg1', { opacity: 1 });
    gsap.set('#svg2', { opacity: 0 });

    // Create the scroll-based animation
    ScrollTrigger.create({
      trigger: '.svg_container',
      start: 'top top',
      pin: true,
      scrub: true,
      onUpdate: (self) => {
        let progress = self.progress;
        gsap.to('#svg1', { opacity: 1 - progress });
        gsap.to('#svg2', { opacity: progress });
      },
    });
  }
}
