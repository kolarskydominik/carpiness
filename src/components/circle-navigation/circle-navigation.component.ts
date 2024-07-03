import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  HostListener,
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
  sections!: NodeListOf<Element>;

  private delay: any;
  private nav!: HTMLElement;

  ngAfterViewInit(): void {
    // animation circle <-> line
    gsap.registerPlugin(ScrollTrigger);
    let container = document.querySelector('.circle_nav');
    let items = gsap.utils.toArray('.circle_nav_item');

    ScrollTrigger.create({
      trigger: container,
      start: 'top top',
      end: 'top top',
      onEnter: () => this.animateToLine(items),
      onEnterBack: () => this.animateToCircle(items),
    });

    // nav hide/show in the end
    let endOfNav = document.querySelector('#end_circle_nav');
    ScrollTrigger.create({
      trigger: endOfNav,
      start: 'top top',
      end: 'top top',
      onEnter: () => container?.classList.add('h-0', 'overflow-hidden'),
      onEnterBack: () => container?.classList.remove('h-0', 'overflow-hidden'),
    });

    // circel navigation selectors
    this.nav = document.querySelector('.circle_nav') as HTMLElement;
    this.sections = document.querySelectorAll('.circle-section');
  }

  // delay for checkVisibleSection
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    if (!isNaN(this.delay)) {
      clearTimeout(this.delay);
    }

    this.delay = setTimeout(() => this.checkVisibleSection(), 50);
  }

  // scroll vertically in navigation
  @HostListener('click', ['$event'])
  onClick(event: MouseEvent): void {
    const link = event.target as HTMLElement;

    const circle_nav_container = document.querySelector('.circle_nav_wrapper');
    if (link && circle_nav_container) {
      this.scrollIntoViewHorizontally(circle_nav_container, link.parentElement);
    }
  }

  // handelrs for circle navigation
  checkVisibleSection(): void {
    let minor = window.innerHeight;
    let section: Element | null = null;

    this.sections.forEach((item) => {
      const offset = item.getBoundingClientRect();
      if (Math.abs(offset.top) < minor) {
        minor = Math.abs(offset.top);
        section = item;
      }
    });

    if (section) {
      const index = (section as HTMLElement).id;
      const link = this.nav.querySelector(
        `a[data-section='${index}']`,
      ) as HTMLElement;

      // If the link is not already active
      if (!link.classList.contains('active')) {
        // Remove the active class
        const activeLink = this.nav.querySelector('a.active') as HTMLElement;
        if (activeLink) {
          activeLink.classList.remove('active');
        }

        // Add the active class
        link.classList.add('active');
        const circle_nav_container = document.querySelector('.circle_nav_wrapper');
        this.scrollIntoViewHorizontally(circle_nav_container, link.parentElement);
      }
    }
  }

  scrollIntoViewHorizontally(container: any, child: any): void {
    const childCenter = child.offsetLeft + child.offsetWidth / 2;
    const containerCenter = container.offsetWidth / 2;
    const targetScrollLeft = childCenter - containerCenter;

    container.scrollTo({
      left: targetScrollLeft,
      behavior: 'smooth',
    });
  }

  animateToLine(items: any[]) {
    document.querySelector('.circle_nav')?.classList.add('sticky');
  }
  animateToCircle(items: any[]) {
    document.querySelector('.circle_nav')?.classList.remove('sticky');
    this.nav.querySelectorAll(`a`)?.forEach((item) => {
      item.classList.remove('active');
    });
  }
}
