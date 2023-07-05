import {
  createAction,
  createActionGroup,
  emptyProps,
  props,
} from '@ngrx/store';

import { Feed, FeedErrorJsonPayload, FeedMedia } from '../models';

export enum FeedActionTypes {
  LoadFeed = '[Feed] Load Feed',
  LoadFeedSuccess = '[Feed] Load Feed Success',
  LoadFeedError = '[Feed] Load Feed Error',
}

export interface FeedErrorActionCommonPayload {
  error: FeedErrorJsonPayload;
}

type LoadFeedSuccessActionPayload = Feed;

export const LoadFeedAction = createAction(FeedActionTypes.LoadFeed);

export const LoadFeedSuccessAction = createAction(
  FeedActionTypes.LoadFeedSuccess,
  props<LoadFeedSuccessActionPayload>()
);

export const LoadFeedErrorAction = createAction(
  FeedActionTypes.LoadFeedSuccess,
  props<FeedErrorActionCommonPayload>()
);
