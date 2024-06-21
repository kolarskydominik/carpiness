import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-advisory',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './advisory.component.html',
  styleUrl: './advisory.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdvisoryComponent {}
