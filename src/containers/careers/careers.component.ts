import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageSectionComponent } from "../../components/page-section/page-section.component";
import { PageContainerComponent } from "../../components/page-container/page-container.component";

@Component({
    selector: 'app-careers',
    standalone: true,
    templateUrl: './careers.component.html',
    styleUrl: './careers.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        PageSectionComponent,
        PageContainerComponent
    ]
})
export class CareersComponent {}

export default CareersComponent;