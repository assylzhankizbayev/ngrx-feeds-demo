export interface FeedAuthorApiData {
  user_name: string;
  person_name: string | null;
  user_bio: string | null;
  user_id: string;
  user_avatar_url: string;
  counters: {
    videos: number;
    followers: number;
    followings: number;
    likes: number;
  };
  subscriptions: {
    is_following: boolean;
  };
  is_blocked: boolean;
  is_blockable: boolean;
  is_reportable: boolean;
  is_identity_confirmed: boolean;
  is_followable: boolean;
  is_deleted: boolean;
}

export interface FeedAuthorConstructorPayload {
  userName: string;
  personName: string | null;
  userBio: string | null;
  userId: string;
  userAvatarUrl: string;
  counters: FeedAuthorCounter;
  subscriptions: FeedAuthorSubs;
  isBlocked: boolean;
  isBlockable: boolean;
  isReportable: boolean;
  isIdentityConfirmed: boolean;
  isFollowable: boolean;
  isDeleted: boolean;
}

interface FeedAuthorCounter {
  videos: number;
  followers: number;
  followings: number;
  likes: number;
}

interface FeedAuthorSubs {
  isFollowing: boolean;
}

export class FeedMediaAuthor {
  public userName: string;
  public personName: string | null;
  public userBio: string | null;
  public userId: string;
  public userAvatarUrl: string;
  public counters: FeedAuthorCounter;
  public subscriptions: FeedAuthorSubs;
  public isBlocked: boolean;
  public isBlockable: boolean;
  public isReportable: boolean;
  public isIdentityConfirmed: boolean;
  public isFollowable: boolean;
  public isDeleted: boolean;

  constructor(payload: FeedAuthorConstructorPayload) {
    const {
      userName,
      personName,
      userBio,
      userId,
      userAvatarUrl,
      counters,
      subscriptions,
      isBlocked,
      isBlockable,
      isReportable,
      isIdentityConfirmed,
      isFollowable,
      isDeleted,
    } = {
      ...payload,
    };

    this.userName = userName;
    this.personName = personName;
    this.userBio = userBio;
    this.userId = userId;
    this.userAvatarUrl = userAvatarUrl;
    this.counters = counters;
    this.subscriptions = subscriptions;
    this.isBlocked = isBlocked ?? false;
    this.isBlockable = isBlockable ?? false;
    this.isReportable = isReportable ?? false;
    this.isIdentityConfirmed = isIdentityConfirmed ?? false;
    this.isFollowable = isFollowable ?? false;
    this.isDeleted = isDeleted ?? false;
  }

  public static createFromApi(apiData: FeedAuthorApiData): FeedMediaAuthor {
    return new FeedMediaAuthor({
      userName: apiData.user_name,
      personName: apiData.person_name,
      userBio: apiData.user_bio,
      userId: apiData.user_id,
      userAvatarUrl: apiData.user_avatar_url,
      counters: apiData.counters,
      subscriptions: { isFollowing: apiData.subscriptions.is_following },
      isBlocked: apiData.is_blocked,
      isBlockable: apiData.is_blockable,
      isReportable: apiData.is_reportable,
      isIdentityConfirmed: apiData.is_identity_confirmed,
      isFollowable: apiData.is_followable,
      isDeleted: apiData.is_deleted,
    });
  }
}
