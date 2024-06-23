import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

type ContentType = {
  title: string;
  items: {
    iconSrc: string;
    label: string;
  }[];
};

@Component({
  selector: 'app-stack-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stack-section.component.html',
  styleUrl: './stack-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StackSectionComponent {
  @Input() content!: ContentType[];
}
