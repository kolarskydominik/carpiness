import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
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
export class StickyAnimationSectionComponent implements OnInit {
  ngOnInit() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to('.scroll_1', {
      scrollTrigger: {
        trigger: '.scroll_1',
        start: 'top 100',
        toggleActions: 'play none reverse none',
        pin: true,
        scrub: 1,
      },
      opacity: 0,
    });

    gsap.to('.scroll_2', {
      scrollTrigger: {
        trigger: '.scroll_2',
        start: 'top 100',
        toggleActions: 'play none reverse none',
        pin: true,
        scrub: 1,
      },
      opacity: 1,
    });
  }
}
