export interface AuthTokenJsonPayload {
  user_id?: string;
  scope?: string;
  lifetimeInSeconds?: number;
  // accessToken: string;
  // refreshToken: string | null;
  access_token: string;
  refresh_token: string | null;
}