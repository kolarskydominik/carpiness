import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { cn } from '../../lib/utils';

@Component({
  selector: 'app-page-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-section.component.html',
  styleUrl: './page-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageSectionComponent {
  @Input() id?: string;
  @Input() className?: string;

  cn = cn;
}
