import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { forkJoin, of, switchMap } from 'rxjs';

import * as AuthActions from './auth.actions';
import { AuthApiService } from '../services/auth-api.service';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthEffects {
  constructor(
    private _actions$: Actions,
    private _authApiService: AuthApiService,
    private _authService: AuthService
  ) {}

  public onLoad$ = createEffect(
    () => {
      return this._actions$.pipe(
        ofType(AuthActions.LoadCacheAction),
        switchMap((action) => {
          const token = this._authService.getAuthTokenFromStorage();

          if (!token) {
            return of(AuthActions.AuthAction());
          }

          return of(
            AuthActions.LoadCacheSuccessAction({
              token: token ?? null,
            })
          );
        })
      );
    },
    {
      dispatch: true,
    }
  );

  public onAuth$ = createEffect(
    () => {
      return this._actions$.pipe(
        ofType(AuthActions.AuthAction),
        switchMap((action) => {
          const redirectUrl = null;

          return forkJoin({
            successRedirectUrl: of(redirectUrl),
            authToken: this._authApiService.login({
              installation_token: '2kxlfAbJwFdAuh0',
              device: {
                platform: 'Web',
                platform_version: 'Web-1.0.0',
              },
              application: {
                app_name: 'Test WEB App',
                app_version: '1.0',
                app_build: 'development',
                app_type: 'watch_to_earn',
              },
            }),
          });
        }),
        switchMap((authData) => {
          this._authService.setAuthTokenToStorage(authData.authToken);

          return of(
            AuthActions.AuthSuccessAction({
              token: authData.authToken,
            })
          );
        })
      );
    },
    { dispatch: true }
  );
}
