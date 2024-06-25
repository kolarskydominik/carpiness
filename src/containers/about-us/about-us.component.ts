import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageSectionComponent } from "../../components/page-section/page-section.component";
import { PageContainerComponent } from "../../components/page-container/page-container.component";

@Component({
    selector: 'app-about-us',
    standalone: true,
    templateUrl: './about-us.component.html',
    styleUrl: './about-us.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        PageSectionComponent,
        PageContainerComponent
    ]
})
export class AboutUsComponent {}

