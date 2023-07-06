import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as FeedActions from '../store/feed.action';
import * as FeedSelectors from '../store/feed.selectors';
import { Observable } from 'rxjs';
import { FeedMedia } from '../models';

@Injectable()
export class FeedStoreService {
  public feedMediaList$: Observable<FeedMedia[]> = this._store.select(
    FeedSelectors.selectAllFeedMedia
  );

  constructor(private _store: Store) {}

  /**
   * Dispatch actions methods
   */

  public dispatchLoadAction(): void {
    this._store.dispatch(FeedActions.LoadFeedAction());
  }
}
