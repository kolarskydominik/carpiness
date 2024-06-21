import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CareersComponent {}

export default CareersComponent;