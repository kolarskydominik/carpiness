import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CtaButtonComponent } from "../cta-button/cta-button.component";

@Component({
    selector: 'app-accordion-section',
    standalone: true,
    templateUrl: './accordion-section.component.html',
    styleUrl: './accordion-section.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        CtaButtonComponent
    ]
})
export class AccordionSectionComponent {}
