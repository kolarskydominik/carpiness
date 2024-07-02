import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { menu } from '../../menu';
import { RouterModule } from '@angular/router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-circle-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './circle-navigation.component.html',
  styleUrl: './circle-navigation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CircleNavigationComponent implements AfterViewInit {
  menu = menu[0]!.children![0].children!;
  
  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    let container = document.querySelector('.circle_nav');
    let items = gsap.utils.toArray('.circle_nav_item');

    ScrollTrigger.create({
      trigger: container,
      start: 'top top',
      end: 'top top',
      onEnter: () => this.animateToLine(items),
      onEnterBack: () => this.animateToCircle(items),
      onLeaveBack: () => this.resetToInitial(items),
      onLeave: () => this.resetToInitial(items),
    });
  }

  animateToLine(items: any[]) {
    document.querySelector('.circle_nav')?.classList.add('sticky');
  }

  animateToCircle(items: any[]) {
    document.querySelector('.circle_nav')?.classList.remove('sticky');
  }

  resetToInitial(items: any[]) {
    document.querySelector('.circle-nav-container')?.classList.remove('sticky');
  }
}
