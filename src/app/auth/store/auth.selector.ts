import { createSelector, createFeatureSelector } from '@ngrx/store';

import { AuthState } from './auth.state';

export const authState = createFeatureSelector<AuthState>('auth');

export const authenticatedState = createSelector(
  authState,
  (state) => state.isAuthenticated
);

export const loadingState = createSelector(
  authState,
  (state) => state.isLoading
);

export const token = createSelector(authState, (state) => state.token);

export const error = createSelector(authState, (state) => state.error);
