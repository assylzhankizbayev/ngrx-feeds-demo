import { createReducer, on } from '@ngrx/store';
import { FeedState, feedInitialState } from './feed.state';
import * as FeedActions from './feed.action';

export const feedReducer = createReducer<FeedState>(
  feedInitialState,
  on(FeedActions.LoadFeedAction, (state, action): FeedState => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(FeedActions.LoadFeedSuccessAction, (state, action): FeedState => {
    return {
      ...state,
      isLoading: false,
      error: null,
    };
  }),
  on(FeedActions.LoadFeedErrorAction, (state, action): FeedState => {
    return {
      ...state,
      isLoading: false,
      error: action.error,
    };
  })
);
