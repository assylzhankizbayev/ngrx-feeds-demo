export interface AuthTokenApiData {
  user_id: string | null;
  access_token: string;
  refresh_token: string;
}

export interface AuthTokenContructorPayload {
  userId: string | null;
  accessToken: string;
  refreshToken: string;
}

export class AuthToken {
  public userId: string | null;
  public accessToken: string | null;
  public refreshToken: string | null;

  constructor(payload: AuthTokenContructorPayload) {
    const { userId, accessToken, refreshToken } = { ...payload };

    this.userId = userId ?? null;
    this.accessToken = accessToken ?? null;
    this.refreshToken = refreshToken ?? null;
  }

  public static createFromApi(apiData: AuthTokenApiData): AuthToken {
    return new AuthToken({
      userId: apiData.user_id,
      accessToken: apiData.access_token,
      refreshToken: apiData.refresh_token,
    });
  }
}
