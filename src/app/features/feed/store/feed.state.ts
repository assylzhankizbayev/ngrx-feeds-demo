import { FeedErrorJsonPayload, FeedMedia } from '../models';

export interface FeedState {
  media: FeedMedia[];
  pageToken: string | null;
  nextPageToken: string | null;
  prevPageToken: string | null;
  recommendationId: string | null;
  isLoading: boolean;
  error: FeedErrorJsonPayload | null;
}

export const feedInitialState: FeedState = {
  media: [],
  pageToken: null,
  nextPageToken: null,
  prevPageToken: null,
  recommendationId: null,
  isLoading: false,
  error: null,
};
