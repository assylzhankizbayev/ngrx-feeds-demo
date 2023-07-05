export interface FeedMedia {
  // "media": [{...} MediaDTO ]
  media: any;
}
export interface FeedResponse<T = FeedMedia> {
  data: T;
}
