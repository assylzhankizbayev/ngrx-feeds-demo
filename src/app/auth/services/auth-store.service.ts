import { Injectable, OnDestroy } from '@angular/core';
import {
  EMPTY,
  Observable,
  Subscription,
  distinctUntilChanged,
  map,
} from 'rxjs';
import { Store } from '@ngrx/store';

import { AuthError, AuthToken, AuthTokenJsonPayload } from '../models';
import { AuthState } from '../store/auth.state';
import * as AuthActions from '../store/auth.actions';
import * as AuthSelectors from '../store/auth.selector';
import { AuthEventService } from './auth-event.service';

@Injectable()
export class AuthStoreService implements OnDestroy {
  public get serviceName(): string {
    return 'AuthStoreService';
  }

  public get currentAuthState(): AuthState {
    return {
      isAuthenticated: this._authenticatedState,
      isLoading: this._loadingState,
      token: this._token,
      error: this._authError,
    };
  }

  public get authenticatedState(): boolean {
    return this._authenticatedState;
  }

  public get loadingState(): boolean {
    return this._loadingState;
  }

  public get token(): AuthToken | null {
    return this._token;
  }

  public get authTokenKey(): string {
    return 'auth_token';
  }

  public token$: Observable<AuthToken | null>;

  protected _token: AuthToken | null;
  protected _authError: AuthError | null;
  protected _authenticatedState: boolean;
  protected _loadingState: boolean;

  protected _authTokenChangeSub: Subscription | null;
  protected _subscription: Subscription;

  constructor(
    private _store: Store,
    private _authEventsService: AuthEventService
  ) {
    this.token$ = EMPTY;

    this._token = null;
    this._authError = null;
    this._authenticatedState = false;
    this._loadingState = false;

    this._authTokenChangeSub = null;
    this._subscription = new Subscription();

    // Reactive triggers setup
    this._initTriggers();

    // Trigger necessary events
    this._authEventsService.triggerAuthStoreConnectedEvent();
  }

  ngOnDestroy(): void {
    this._authTokenChangeSub?.unsubscribe();
  }

  public setAuthToken(token: AuthToken): boolean {
    return this._saveObjectToCache<AuthToken>(this.authTokenKey, token);
  }

  public getAuthToken(): AuthToken | null {
    const object = this._getObjectFromCache<AuthTokenJsonPayload>(
      this.authTokenKey
    );

    if (!object) {
      return null;
    }

    return AuthToken.createFromJson(object);
  }

  public removeAuthToken(): boolean {
    return this._removeObjectFromCache(this.authTokenKey);
  }

  // Actions
  public dispatchLoadAction(): void {
    this._store.dispatch(AuthActions.LoadCacheAction());
  }

  public auth(): void {
    this._store.dispatch(AuthActions.AuthAction());
  }

  // Helpers
  private _getObjectFromCache<ObjectCacheType>(
    cacheKey: string
  ): ObjectCacheType | null {
    try {
      const jsonData = localStorage.getItem(cacheKey);

      if (!jsonData) {
        return null;
      }

      const cacheData: ObjectCacheType = JSON.parse(jsonData);

      if (!cacheData) {
        return null;
      }

      return cacheData;
    } catch (error) {
      console.error(`[${this.serviceName}][GetObjectFromCache()]: `, error);
      return null;
    }
  }

  private _removeObjectFromCache(cacheKey: string): boolean {
    try {
      localStorage.removeItem(cacheKey);
    } catch (error) {
      console.error(`[${this.serviceName}][RemoveObjectFromCache()]: `, error);
      return false;
    }

    return true;
  }

  private _saveObjectToCache<ObjectType>(
    cacheKey: string,
    object: ObjectType
  ): boolean {
    try {
      localStorage.setItem(cacheKey, JSON.stringify(object));
    } catch (error) {
      console.error(`[${this.serviceName}][SaveObjectToCache()]: `, error);
      return false;
    }

    return true;
  }

  private _afterAuthStoreConnect(): void {
    this.token$ = this._store.select(AuthSelectors.token).pipe(
      map((tokenJson) => {
        if (!tokenJson) {
          return null;
        }

        console.log('token selector', tokenJson);
        

        return AuthToken.createFromJson(tokenJson);
      })
    );

    this._initAuthStoreTriggers();
  }

  private _initAuthStoreTriggers(): void {
    this._authTokenChangeSub = this.token$
      .pipe(distinctUntilChanged())
      .subscribe((token) => {
        this._token = token;
        // this._authEventsService.triggerTokenChangeEvent(token);
      });
  }

  protected _initTriggers(): void {
    const storeConnectedTrigger =
      this._authEventsService.authStoreConnected$.subscribe(() => {
        console.log('connected');
        
        this._afterAuthStoreConnect();
      });

    this._subscription.add(storeConnectedTrigger);
  }
}
