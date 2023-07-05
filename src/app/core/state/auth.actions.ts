import { createAction, props } from '@ngrx/store';

import { AuthErrorJsonPayload, AuthTokenJsonPayload } from '../models';

export enum AuthActionTypes {
  Login = '[Auth] Auth Login',
  LoginSuccess = '[Auth] Auth Login Success',
  LoginError = '[Auth] Auth Login Error',
}

export interface AuthErrorActionCommonPayload {
  error: AuthErrorJsonPayload;
}

export interface LoadSuccessActionPayload {
  // isLoggedIn: boolean;
  // iframeConsumer: LoginIframeConsumer | null;
  // loginType: LoginType | null;
  // profile: UserJsonPayload | null;
  // token: AuthTokenJsonPayload | null;
}

export interface LoginActionPayload {
  username: string;
  password: string;
  successRedirectUrl?: string | null;
}

export interface LoginSuccessActionPayload {
  // profile: string | null;
  token: AuthTokenJsonPayload;
  successRedirectUrl?: string | null;
}

export const LoginAction = createAction(
  AuthActionTypes.Login,
  props<LoginActionPayload>()
);

export const LoginSuccessAction = createAction(
  AuthActionTypes.LoginSuccess,
  props<LoginSuccessActionPayload>()
);

export const LoginErrorAction = createAction(
  AuthActionTypes.LoginError,
  props<AuthErrorActionCommonPayload>()
);
