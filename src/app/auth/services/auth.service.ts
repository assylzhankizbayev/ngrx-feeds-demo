import { Injectable, OnDestroy } from '@angular/core';

import { AuthStoreService } from './auth-store.service';
import { AuthState } from '../store/auth.state';
import { AuthToken } from '../models';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService implements OnDestroy {
  public get currentAuthState(): AuthState {
    return this._authStoreService.currentAuthState;
  }

  public get isAuthenticated(): boolean {
    return this._authStoreService.authenticatedState;
  }

  public get isAuthenticated$(): Observable<boolean> {
    return this._authStoreService.authenticated$;
  }

  public get isLoading(): boolean {
    return this._authStoreService.loadingState;
  }

  public get token(): AuthToken | null {
    return this._authStoreService.token;
  }

  constructor(private _authStoreService: AuthStoreService) {}

  ngOnDestroy(): void {}

  public setAuthTokenToStorage(token: AuthToken | null): void {
    if (!token) {
      this._authStoreService.removeAuthToken();
      return;
    }

    this._authStoreService.setAuthToken(token);
  }

  public getAuthTokenFromStorage(): AuthToken | null {
    return this._authStoreService.getAuthToken();
  }
}
