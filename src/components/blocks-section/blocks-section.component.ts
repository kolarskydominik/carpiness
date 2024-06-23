import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-blocks-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blocks-section.component.html',
  styleUrl: './blocks-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlocksSectionComponent {
  @Input() title?: string;
  @Input() items?: { iconSrc: string; label: string }[];
}