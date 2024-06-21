import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { timer, map, takeWhile, shareReplay, tap } from 'rxjs';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageNotFoundComponent implements OnInit {
  constructor(private router: Router) {}

  countDown$ = timer(0, 1000).pipe(
    map((value) => 10 - value),
    takeWhile((value) => value >= 0),
    shareReplay(1),
  );

  redirectHome$ = this.countDown$.pipe(
    tap((value) => {
      if (value <= 0) {
        this.router.navigate(['']);
      }
    }),
    takeUntilDestroyed(),
  );

  ngOnInit(): void {
    this.redirectHome$.subscribe();
  }
}
