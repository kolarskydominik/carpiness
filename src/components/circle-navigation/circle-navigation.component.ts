import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { menu } from '../../menu';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-circle-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './circle-navigation.component.html',
  styleUrl: './circle-navigation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CircleNavigationComponent {
  menu = menu[0]!.children![0].children!;
}
