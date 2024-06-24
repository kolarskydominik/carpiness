import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuItem } from '../../menu';
import { cn } from '../../lib/utils';

@Component({
  selector: 'app-cta-button',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cta-button.component.html',
  styleUrl: './cta-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CtaButtonComponent {
  @Input() type: 'link' | 'button' = 'button';
  @Input() variant: 'primary' | 'secondary' = 'primary';
  @Input() link?: MenuItem;
  @Input() click?: () => void;
  @Input() className?: string;
  cn = cn;
}
