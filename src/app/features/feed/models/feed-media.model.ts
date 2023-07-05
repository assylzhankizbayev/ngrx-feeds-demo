import {
  FeedAuthorApiData,
  FeedAuthorConstructorPayload,
  FeedMediaAuthor,
} from './feed-media-author.model';

export interface FeedMediaApiData {
  author: FeedAuthorApiData;
  media_id: string;
  media_name: string;
  media_description: string;
  created_at: number | Date;
  categories: unknown[]; // todo: unknown
  counters: FeedCounters;
  parent_resource_reference: {
    resource_type: string;
    resource_id: string;
    resource_url: string | null;
    resource_title: string;
  };
  moderation_status: string;
  deleted_at: number | Date | null;
  preview_url: string;
  media_url: string;
  media_urls: {
    h264_low: string;
  };
  thumbnail_url: string;
  is_boosted: boolean;
  is_liked: boolean;
  is_deleted: boolean;
  is_blocked: boolean;
  is_hidable: boolean;
  is_challenge_winner: boolean;
  is_deletable: boolean;
  is_reportable: boolean;
  allow_comments: boolean;
  media_duration: number;
  boost_coefficient: number;
  user_likes_preview: unknown[]; // todo: unknown
  show_id: string | null;
  votes: number | null;
  is_voted: boolean;
  is_votable: boolean;
  challenge_stage: string;
  show_views: unknown; // todo: unknown
  audio: unknown;
}

export interface FeedMediaConstructorPayload {
  author: FeedAuthorConstructorPayload | null;
  mediaId: string | null;
  mediaName: string | null;
  mediaDescription: string | null;
  createdAt: number | Date | null;
  categories: unknown[] | null; // todo: unknown
  counters: FeedCounters | null;
  parentResourceReference: FeedParentResourceReference | null;
  moderationStatus: string | null;
  deletedAt: number | Date | null;
  previewUrl: string | null;
  mediaUrl: string | null;
  mediaUrls: FeedMediaUrls | null;
  thumbnailUrl: string | null;
  isBoosted: boolean;
  isLiked: boolean;
  isDeleted: boolean;
  isBlocked: boolean;
  isHidable: boolean;
  isChallengeWinner: boolean;
  isDeletable: boolean;
  isReportable: boolean;
  allowComments: boolean;
  mediaDuration: number;
  boostCoefficient: number;
  userLikesPreview: unknown[] | null; // todo: unknown
  showId: string | null;
  votes: number | null;
  isVoted: boolean;
  isVotable: boolean;
  challengeStage: string | null;
  showViews: unknown; // todo: unknown
  audio: unknown;
}

export interface FeedCounters {
  likes: number;
  views: number;
  comments: number;
  reposts: number;
}

export interface FeedParentResourceReference {
  resourceType: string;
  resourceId: string;
  resourceUrl: string | null;
  resourceTitle: string;
}

export interface FeedMediaUrls {
  h264Low: string;
}

export class FeedMedia {
  public author: FeedMediaAuthor | null;
  public mediaId: string | null;
  public mediaName: string | null;
  public mediaDescription: string | null;
  public createdAt: number | Date | null;
  public categories: unknown[] | null; // todo: unknown
  public counters: FeedCounters | null;
  public parentResourceReference: FeedParentResourceReference | null;
  public moderationStatus: string | null;
  public deletedAt: number | Date | null;
  public previewUrl: string | null;
  public mediaUrl: string | null;
  public mediaUrls: FeedMediaUrls | null;
  public thumbnailUrl: string | null;
  public isBoosted: boolean;
  public isLiked: boolean;
  public isDeleted: boolean;
  public isBlocked: boolean;
  public isHidable: boolean;
  public isChallengeWinner: boolean;
  public isDeletable: boolean;
  public isReportable: boolean;
  public allowComments: boolean;
  public mediaDuration: number;
  public boostCoefficient: number;
  public userLikesPreview: unknown[] | null; // todo: unknown
  public showId: string | null;
  public votes: number | null;
  public isVoted: boolean;
  public isVotable: boolean;
  public challengeStage: string | null;
  public showViews: unknown; // todo: unknown
  public audio: unknown;

  constructor(payload: FeedMediaConstructorPayload) {
    this.audio = payload.audio;
    this.author = payload.author ?? null;
    this.counters = payload.counters;
    this.createdAt = payload.createdAt;
    this.categories = payload.categories;
    this.previewUrl = payload.previewUrl;
    this.deletedAt = payload.deletedAt;

    this.mediaId = payload.mediaId;
    this.mediaUrl = payload.mediaUrl;
    this.mediaUrls = payload.mediaUrls;
    this.mediaName = payload.mediaName;
    this.mediaDuration = payload.mediaDuration;
    this.mediaDescription = payload.mediaDescription;

    this.isBoosted = payload.isBoosted ?? false;
    this.isLiked = payload.isLiked ?? false;
    this.isDeleted = payload.isDeleted ?? false;
    this.isBlocked = payload.isBlocked ?? false;
    this.isHidable = payload.isHidable ?? false;
    this.isChallengeWinner = payload.isChallengeWinner ?? false;
    this.isDeletable = payload.isDeletable ?? false;
    this.isReportable = payload.isReportable ?? false;
    this.allowComments = payload.allowComments ?? false;

    this.showId = payload.showId;
    this.showViews = payload.showViews;

    this.thumbnailUrl = payload.thumbnailUrl;
    this.challengeStage = payload.challengeStage;
    this.boostCoefficient = payload.boostCoefficient;
    this.userLikesPreview = payload.userLikesPreview;
    this.moderationStatus = payload.moderationStatus;
    this.parentResourceReference = payload.parentResourceReference;

    this.votes = payload.votes;
    this.isVoted = payload.isVoted ?? false;
    this.isVotable = payload.isVotable ?? false;
  }

  public static createFromApi(apiData: FeedMediaApiData): FeedMedia {
    let author: FeedMediaAuthor | null = null;

    if (apiData.author) {
      author = FeedMediaAuthor.createFromApi(apiData.author);
    }

    return new FeedMedia({
      author,
      mediaId: apiData.media_id,
      mediaName: apiData.media_name,
      mediaDescription: apiData.media_description,
      createdAt: apiData.created_at,
      categories: apiData.categories,
      counters: apiData.counters,
      parentResourceReference: {
        resourceId: apiData.parent_resource_reference.resource_id,
        resourceTitle: apiData.parent_resource_reference.resource_title,
        resourceType: apiData.parent_resource_reference.resource_type,
        resourceUrl: apiData.parent_resource_reference.resource_url,
      },
      moderationStatus: apiData.moderation_status,
      deletedAt: apiData.deleted_at,
      previewUrl: apiData.preview_url,
      mediaUrl: apiData.media_url,
      mediaUrls: {
        h264Low: apiData.media_urls.h264_low,
      },
      thumbnailUrl: apiData.thumbnail_url,
      isBoosted: apiData.is_boosted,
      isLiked: apiData.is_liked,
      isDeleted: apiData.is_deleted,
      isDeletable: apiData.is_deletable,
      isBlocked: apiData.is_blocked,
      isHidable: apiData.is_hidable,
      isChallengeWinner: apiData.is_challenge_winner,
      isReportable: apiData.is_reportable,
      allowComments: apiData.allow_comments,
      mediaDuration: apiData.media_duration,
      boostCoefficient: apiData.boost_coefficient,
      userLikesPreview: apiData.user_likes_preview,
      showId: apiData.show_id,
      votes: apiData.votes,
      isVoted: apiData.is_voted,
      isVotable: apiData.is_votable,
      challengeStage: apiData.challenge_stage,
      showViews: apiData.show_views,
      audio: apiData.audio,
    });
  }
}
