import { AuthError, AuthToken } from "../models";

export interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  token: AuthToken | null;
  error: AuthError | null;
}

export const authInitialState: AuthState = {
  isAuthenticated: false,
  isLoading: false,
  token: null,
  error: null,
};
