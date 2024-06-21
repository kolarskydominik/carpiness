import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {RouterModule} from '@angular/router';
import {MenuItem} from '../../menu';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  footerLinks: MenuItem[] = [
    { label: 'Services', path: 'services' },
    { label: 'Expertise', path: 'expertise' },
    { label: 'Industry', path: 'industry' },
    { label: 'About Us', path: 'about-us' },
    { label: 'Contact', path: 'contact' },
  ]
}
