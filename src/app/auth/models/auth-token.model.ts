export interface AuthTokenApiData {
  user_id: string | null;
  access_token: string;
  refresh_token: string;
}

export interface AuthTokenJsonPayload {
  userId: string | null;
  accessToken: string;
  refreshToken: string;
}

export interface AuthTokenContructorPayload {
  userId: string | null;
  accessToken: string;
  refreshToken: string;
}

export class AuthToken {
  public userId: string | null;
  public accessToken: string;
  public refreshToken: string;

  constructor(payload: AuthTokenContructorPayload) {
    const { userId, accessToken, refreshToken } = { ...payload };

    this.userId = userId ?? null;
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
  }

  public static createFromApi(apiData: AuthTokenApiData): AuthToken {
    return new AuthToken({
      userId: apiData.user_id,
      accessToken: apiData.access_token,
      refreshToken: apiData.refresh_token,
    });
  }

  public static createFromJson(jsonData: AuthTokenJsonPayload): AuthToken {
    return new AuthToken({
      userId: jsonData.userId,
      accessToken: jsonData.accessToken,
      refreshToken: jsonData.refreshToken,
    });
  }

  public toJSON(): AuthTokenJsonPayload {
    return {
      userId: this.userId,
      accessToken: this.accessToken,
      refreshToken: this.refreshToken,
    };
  }
}
