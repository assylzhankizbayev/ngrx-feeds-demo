import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Observable, Subject, first, takeUntil } from 'rxjs';

import { FeedMedia } from './models';
import { FeedStoreService } from './services/feed-store.service';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedComponent implements OnInit, OnDestroy {
  public feedMediaList$: Observable<FeedMedia[]>;
  private _destroy$: Subject<void>;

  constructor(
    private _authService: AuthService,
    private _feedStoreService: FeedStoreService
  ) {
    this.feedMediaList$ = this._feedStoreService.feedMediaList$;

    this._destroy$ = new Subject();
  }

  ngOnInit(): void {
    this._initTriggers();
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  private _initTriggers(): void {
    this._authService.isAuthenticated$
      .pipe(first(Boolean))
      .subscribe((isAuthenticated) => {
        if (isAuthenticated) {
          this._feedStoreService.dispatchLoadAction();
        }
      });

    this.feedMediaList$.pipe(takeUntil(this._destroy$)).subscribe((list) => {
      console.log('feed media list', list);
    });
  }
}
