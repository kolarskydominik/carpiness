import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { PageSectionComponent } from '../../components/page-section/page-section.component';
import { PageContainerComponent } from '../../components/page-container/page-container.component';
import { CirclesSectionComponent } from '../../components/circles-section/circles-section.component';
import { BlocksSectionComponent } from '../../components/blocks-section/blocks-section.component';
import { content } from '../../content';
import { StackSectionComponent } from "../../components/stack-section/stack-section.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        CardComponent,
        PageSectionComponent,
        PageContainerComponent,
        CirclesSectionComponent,
        BlocksSectionComponent,
        StackSectionComponent
    ]
})
export class HomeComponent {
  content = content;
}
