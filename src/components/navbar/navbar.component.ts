import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuItem, menu } from '../../menu';
import { RouterModule } from '@angular/router';
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
  imports: [CommonModule, RouterModule, CtaButtonComponent],
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
      transition('closed <=> open', [animate('200ms ease-in-out')]),
    ]),
  ],
})
export class NavbarComponent {
  menu: MenuItem[] = menu;
  childMenuState: { [key: number]: string } = {};
  isNavbarScrolled: boolean = false;
  isHamburgerOpen: boolean = false;

  @HostListener('window:scroll', ['$event']) onScroll() {
    if (window.scrollY > 50) {
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
}
