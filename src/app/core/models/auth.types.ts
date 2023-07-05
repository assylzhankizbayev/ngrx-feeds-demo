export interface LoginPayload {
  installation_token: string;
  device: {
    platform: string;
    platform_version: string;
  };
  application: {
    app_name: string;
    app_version: string;
    app_build: string;
    app_type: string;
  };
}

export interface LoginResponse {
  refresh_token: string;
  access_token: string;
  user_id: string;
}

export interface AuthResponse<T = LoginResponse> {
  data: T;
}
