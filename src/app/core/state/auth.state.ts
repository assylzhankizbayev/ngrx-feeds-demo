import { AuthErrorJsonPayload, AuthTokenJsonPayload } from "../models";

export interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  token: AuthTokenJsonPayload | null;
  // profile: any | null;
  error: AuthErrorJsonPayload | null;
}

export const authInitialState: AuthState = {
  isAuthenticated: false,
  isLoading: false,
  token: null,
  // profile: null,
  error: null,
};
