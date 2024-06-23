import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PageSectionComponent } from "../page-section/page-section.component";
import { PageContainerComponent } from "../page-container/page-container.component";
import { CtaButtonComponent } from "../cta-button/cta-button.component";

@Component({
    selector: 'app-card',
    standalone: true,
    templateUrl: './card.component.html',
    styleUrl: './card.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, PageSectionComponent, PageContainerComponent, CtaButtonComponent]
})
export class CardComponent {
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() description!: string;
  @Input() author!: {
    title: string;
    name: string;
    avatarScr: string;
    position: string;
    link?: string;
  };
  @Input() variant!: 'h1' | 'h2';
}

