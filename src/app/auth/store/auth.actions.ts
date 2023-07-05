import { createAction, props } from '@ngrx/store';

import { AuthError, AuthToken, AuthTokenJsonPayload } from '../models';

export enum AuthActionTypes {
  LoadCache = '[Auth] Load Cache',
  LoadCacheSuccess = '[Auth] Load Cache Success',
  LoadCacheError = '[Auth] Load Cache Error',
  Auth = '[Auth] Start Auth',
  AuthSuccess = '[Auth] Auth Success',
  AuthError = '[Auth] Auth Error',
}

export interface AuthErrorActionCommonPayload {
  error: AuthError;
}

export interface LoginSuccessActionJsonPayload {
  token: AuthTokenJsonPayload | null;
}

export interface LoginSuccessActionPayload {
  token: AuthToken;
}

export const LoadCacheAction = createAction(AuthActionTypes.LoadCache);

export const LoadCacheSuccessAction = createAction(
  AuthActionTypes.LoadCacheSuccess,
  props<LoginSuccessActionPayload>()
);

export const LoadCacheErrorAction = createAction(
  AuthActionTypes.LoadCacheError,
  props<AuthErrorActionCommonPayload>()
);

export const AuthAction = createAction(AuthActionTypes.Auth);

export const AuthSuccessAction = createAction(
  AuthActionTypes.AuthSuccess,
  props<LoginSuccessActionPayload>()
);

export const AuthErrorAction = createAction(
  AuthActionTypes.AuthError,
  props<AuthErrorActionCommonPayload>()
);
