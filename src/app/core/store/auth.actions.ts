import { createAction, props } from '@ngrx/store';

import { AuthError, AuthToken } from '../models';

export enum AuthActionTypes {
  Auth = '[Auth] Start Auth',
  AuthSuccess = '[Auth] Auth Success',
  AuthError = '[Auth] Auth Error',
}

export interface AuthErrorActionCommonPayload {
  error: AuthError;
}

export interface LoginSuccessActionPayload {
  token: AuthToken;
  successRedirectUrl?: string | null;
}

export const AuthAction = createAction(AuthActionTypes.Auth);

export const AuthSuccessAction = createAction(
  AuthActionTypes.AuthSuccess,
  props<LoginSuccessActionPayload>()
);

export const AuthErrorAction = createAction(
  AuthActionTypes.AuthError,
  props<AuthErrorActionCommonPayload>()
);
