import { createReducer, on } from '@ngrx/store';
import { AuthState, authInitialState } from './auth.state';
import * as AuthActions from './auth.actions';

export const authReducer = createReducer<AuthState>(
  authInitialState,
  on(AuthActions.LoadCacheAction, (state, action): AuthState => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(AuthActions.LoadCacheSuccessAction, (state, action): AuthState => {
    return {
      ...state,
      token: action.token,
      isAuthenticated: !!action.token,
      isLoading: false,
    };
  }),
  on(AuthActions.LoadCacheErrorAction, (state, action): AuthState => {
    return {
      ...authInitialState,
      error: action.error,
    };
  }),
  on(AuthActions.AuthAction, (state, action): AuthState => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(AuthActions.AuthSuccessAction, (state, action): AuthState => {
    return {
      ...state,
      isLoading: false,
      isAuthenticated: !!action.token,
      token: action.token,
      error: null,
    };
  }),
  on(AuthActions.AuthErrorAction, (state, action): AuthState => {
    return {
      ...state,
      isAuthenticated: false,
      isLoading: false,
      token: null,
      error: action.error,
    };
  })
);
