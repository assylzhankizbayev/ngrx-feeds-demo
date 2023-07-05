import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, switchMap } from 'rxjs';

import * as FeedActions from './feed.action';
import { FeedApiService } from '../services/feed-api.service';

@Injectable()
export class FeedEffects {
  public get feedEffectsName(): string {
    return `[NGRX][FeedLib][FeedEffects]`;
  }

  constructor(
    private _actions$: Actions,
    private _feedApiService: FeedApiService
  ) {}

  public onLoadFeeds$ = createEffect(
    () => {
      return this._actions$.pipe(
        ofType(FeedActions.LoadFeedAction),
        switchMap((action) => {
          return this._feedApiService.getRecommendedFeeds();
        }),
        switchMap((authData) => {
          return of(FeedActions.LoadFeedSuccessAction(authData));
        })
      );
    },
    { dispatch: true }
  );
}
