import { createFeatureSelector, createSelector } from "@ngrx/store";
import { FeedState, feedMediaAdapter } from "./feed.state";

const selectFeedState = createFeatureSelector<FeedState>('feed');

const selectFeedMediaState = createSelector(selectFeedState, ({ media }) => media);

const feedMediaSelectors = feedMediaAdapter.getSelectors(selectFeedMediaState);

export const selectAllFeedMedia = feedMediaSelectors.selectAll;