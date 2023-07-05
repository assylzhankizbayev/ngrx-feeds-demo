import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { forkJoin, of, switchMap } from 'rxjs';

import * as AuthActions from './auth.actions';
import { AuthApiService } from '../services/auth-api.service';

@Injectable()
export class AuthEffects {
  public get authEffectsName(): string {
    return `[NGRX][AuthLib][AuthEffects]`;
  }

  constructor(
    private _actions$: Actions,
    private _authApiService: AuthApiService
  ) {}

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
          return of(
            AuthActions.AuthSuccessAction({
              successRedirectUrl: '',
              token: authData.authToken,
            })
          );
        })
      );
    },
    { dispatch: true }
  );
}
