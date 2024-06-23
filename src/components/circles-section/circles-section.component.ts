import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-circles-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './circles-section.component.html',
  styleUrl: './circles-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CirclesSectionComponent {
  @Input() title?: string;
  @Input() texts?: string[];
}
