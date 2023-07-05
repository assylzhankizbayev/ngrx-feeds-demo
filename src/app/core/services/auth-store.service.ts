import { Injectable } from '@angular/core';
import { AuthState } from '../store/auth.state';
import { EMPTY, Observable } from 'rxjs';
import { AuthError, AuthToken } from '../models';

@Injectable()
export class AuthStoreService {
  public get currentAuthState(): AuthState {
    return {
      isAuthenticated: this._authenticatedState,
      isLoading: this._loadingState,
      token: this._token,
      error: this._authError,
    };
  }

  public token$: Observable<AuthToken | null>;

  protected _token: AuthToken | null;
  protected _authenticatedState: boolean;
  protected _loadingState: boolean;
  protected _authError: AuthError | null;

  constructor() {
    this.token$ = EMPTY;

    this._authenticatedState = false;
    this._loadingState = false;
    this._authError = null;
    this._token = null;
  }
}
