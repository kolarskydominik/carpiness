import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-blocks-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blocks_section.component.html',
  styleUrl: './blocks_section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlocksSectionComponent {
  @Input() title?: string;
  @Input() items?: { iconSrc: string; label: string }[];
}
