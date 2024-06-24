import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { MenuItem, menu } from '../../menu';
import { RouterLinkActive, RouterModule } from '@angular/router';
import { CtaButtonComponent } from '../cta-button/cta-button.component';
import { HostListener } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterModule, CtaButtonComponent, RouterLinkActive],
  animations: [
    trigger('toggleChildMenu', [
      state(
        'closed',
        style({
          height: '0px',
          opacity: 0,
          visibility: 'hidden',
        }),
      ),
      state(
        'open',
        style({
          height: '*',
          opacity: 1,
          visibility: 'visible',
        }),
      ),
      transition('closed <=> open', [animate('400ms ease-in-out')]),
    ]),
  ],
})
export class NavbarComponent {
  @ViewChildren('mobileLink') mobileLinks!: QueryList<ElementRef>;
  menu: MenuItem[] = menu;
  childMenuState: { [key: number]: string } = {};
  isNavbarScrolled: boolean = false;
  isHamburgerOpen: boolean = false;


  constructor(private elementRef: ElementRef) {}

  // * listeners
  @HostListener('window:scroll', ['$event']) onScroll() {
    if (window.scrollY > 25) {
      this.isNavbarScrolled = true;
    } else {
      this.isNavbarScrolled = false;
    }
  }

  @HostListener('window:resize', ['$event']) onResize() {
    if (window.innerWidth > 768) {
      this.isHamburgerOpen = false;
    }
  }

  @HostListener('document:click', ['$event']) clickout(event: Event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isHamburgerOpen = false;
    }
  }

  @HostListener('click', ['$event'])
  onClick(event: Event): void {
    const target = event.target as HTMLElement;
    if (this.isMobileLink(target)) {
      this.toggleHamburger();
    }
  }

  // * handlers
  toggleChildMenu(index: number) {
    this.childMenuState[index] =
      this.childMenuState[index] === 'open' ? 'closed' : 'open';
  }

  toggleHamburger() {
    const hamburger = document.querySelector('#hamburger');
    const navbar = document.querySelector('#navbar');
    const body = document.querySelector('body');

    if (hamburger && navbar && body) {
      this.isHamburgerOpen = !this.isHamburgerOpen;
      body.classList.toggle('overflow-hidden');
    }
  }

  // * helpers
  private isMobileLink(target: HTMLElement): boolean {
    return this.mobileLinks
      .toArray()
      .some((link) => link.nativeElement === target);
  }
}
