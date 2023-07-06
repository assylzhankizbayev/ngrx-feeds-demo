import { EntityState, IdSelector, createEntityAdapter } from '@ngrx/entity';
import { FeedErrorJsonPayload, FeedMedia } from '../models';

export interface FeedState {
  media: EntityState<FeedMedia>;
  pageToken: string | null;
  nextPageToken: string | null;
  prevPageToken: string | null;
  recommendationId: string | null;
  isLoading: boolean;
  error: FeedErrorJsonPayload | null;
}

const selectId: IdSelector<FeedMedia> = ({ mediaId }) => mediaId;

export const feedMediaAdapter = createEntityAdapter<FeedMedia>({ selectId });

export const feedInitialState: FeedState = {
  media: feedMediaAdapter.getInitialState(),
  pageToken: null,
  nextPageToken: null,
  prevPageToken: null,
  recommendationId: null,
  isLoading: false,
  error: null,
};
