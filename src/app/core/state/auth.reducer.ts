import { createReducer, on } from '@ngrx/store';
import { AuthState, authInitialState } from './auth.state';
import * as AuthActions from './auth.actions';

export const authReducer = createReducer<AuthState>(
  authInitialState,
  on(AuthActions.LoginAction, (state, action): AuthState => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(AuthActions.LoginSuccessAction, (state, action): AuthState => {
    return {
      ...state,
      isAuthenticated: true,
      isLoading: false,
      token: action.token,
      error: null,
    };
  }),
  on(AuthActions.LoginErrorAction, (state, action): AuthState => {
    return {
      ...state,
      isAuthenticated: false,
      isLoading: false,
      token: null,
      error: action.error,
    };
  }),
);
