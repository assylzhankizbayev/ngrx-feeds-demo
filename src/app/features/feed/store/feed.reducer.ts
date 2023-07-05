import { createReducer, on } from '@ngrx/store';
import { FeedState, feedInitialState, feedMediaAdapter } from './feed.state';
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
    const media = feedMediaAdapter.addMany(action.media, state.media);

    return {
      ...state,
      media,
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

// export const productsReducer = createReducer(
//   productsAdapter.getInitialState(),
//   on(ProductsActions.loadAllSuccess, (state, { products }) =>
//     productsAdapter.addMany(products, state)
//   ),
// );
