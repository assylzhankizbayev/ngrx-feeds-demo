import { createAction, props } from '@ngrx/store';

import { FeedErrorJsonPayload } from '../models';

export enum FeedActionTypes {
  LoadFeed = '[Feed] Load Feed',
  LoadFeedSuccess = '[Feed] Load Feed Success',
  LoadFeedError = '[Feed] Load Feed Error',
}

export interface FeedErrorActionCommonPayload {
  error: FeedErrorJsonPayload;
}

export interface LoadFeedSuccessActionPayload {
  // token: AuthToken;
  // successRedirectUrl?: string | null;
  media: any;
}

export const LoadFeedAction = createAction(FeedActionTypes.LoadFeed);

export const LoadFeedSuccessAction = createAction(
  FeedActionTypes.LoadFeedSuccess,
  props<LoadFeedSuccessActionPayload>()
);

export const LoadFeedErrorAction = createAction(
  FeedActionTypes.LoadFeedSuccess,
  props<FeedErrorActionCommonPayload>()
);
