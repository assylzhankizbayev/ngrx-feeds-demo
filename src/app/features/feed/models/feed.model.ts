import {
  FeedMedia,
  FeedMediaApiData,
  FeedMediaConstructorPayload,
} from './feed-media.model';


export interface FeedResponse<T = FeedApiData> {
  data: T;
}

export interface FeedApiData {
  media: FeedMediaApiData[];
  page_token: string;
  next_page_token: string;
  prev_page_token: string | null;
  recommendation_id: string | null;
}

export interface FeedConstructorPayload {
  media: FeedMediaConstructorPayload[];
  pageToken: string;
  nextPageToken: string;
  prevPageToken: string | null;
  recommendationId: string | null;
}

export class Feed {
  media: FeedMedia[];
  pageToken: string | null;
  nextPageToken: string | null;
  prevPageToken: string | null;
  recommendationId: string | null;

  constructor(payload: FeedConstructorPayload) {
    const { media, pageToken, nextPageToken, prevPageToken, recommendationId } =
      {
        ...payload,
      };

    this.media = media ?? [];
    this.pageToken = pageToken;
    this.nextPageToken = nextPageToken;
    this.prevPageToken = prevPageToken;
    this.recommendationId = recommendationId;
  }

  public static createFromApi(apiData: FeedApiData): Feed {
    const media: FeedMedia[] = [];

    if (apiData.media?.length) {
      for (let mediaItem of apiData.media) {
        media.push(FeedMedia.createFromApi(mediaItem));
      }
    }

    return new Feed({
      media,
      pageToken: apiData.page_token,
      nextPageToken: apiData.next_page_token,
      prevPageToken: apiData.prev_page_token,
      recommendationId: apiData.recommendation_id,
    });
  }
}
