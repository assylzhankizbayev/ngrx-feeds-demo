import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Observable, Subject, finalize, first, takeUntil } from 'rxjs';

import { FeedMedia } from './models';
import { FeedStoreService } from './services/feed-store.service';
import { AuthService } from '../../auth/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { VideoplayerComponent } from '../videoplayer/videoplayer.component';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedComponent implements OnInit, OnDestroy {
  public feedMediaList: FeedMedia[];
  public feedMediaList$: Observable<FeedMedia[]>;
  private _destroy$: Subject<void>;

  constructor(
    private _dialog: MatDialog,
    private _authService: AuthService,
    private _feedStoreService: FeedStoreService,
    private _cdr: ChangeDetectorRef
  ) {
    this.feedMediaList = [];
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

  public openVideoPlayer(mediaUrl: string): void {
    this._dialog.open(VideoplayerComponent, {
      data: mediaUrl,
    });
  }

  private _initTriggers(): void {
    this._authService.isAuthenticated$
      .pipe(takeUntil(this._destroy$))
      .subscribe((isAuthenticated) => {
        if (isAuthenticated) {
          this._feedStoreService.dispatchLoadAction();
        }
      });

    this.feedMediaList$.pipe(takeUntil(this._destroy$)).subscribe((list) => {
      this.feedMediaList = list;

      this._cdr.markForCheck();
    });
  }
}
