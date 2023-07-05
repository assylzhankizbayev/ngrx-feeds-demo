import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as AuthActions from './auth.actions';
import { forkJoin, of, switchMap } from 'rxjs';
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

  public onLogin$ = createEffect(
    () => {
      return this._actions$.pipe(
        ofType(AuthActions.LoginAction),
        switchMap((action) => {
          console.log('auth effects');
          
          const username = action.username;
          const password = action.password;
          const redirectUrl = action.successRedirectUrl ?? null;

          if (!username || !password) {
            // throw new AuthError({
            //   code: AuthError.LOGIN_INVALID_CREDENTIALS_ERROR_CODE,
            //   message: 'Empty user credentials',
            // });

            throw new Error('Empty user credentials');
          }

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
            AuthActions.LoginSuccessAction({
              successRedirectUrl: '',
              // profile: authData.userProfile ? authData.userProfile.toJSON() : null,
              token: authData.authToken.data,
            })
          );
        })
      );
    },
    { dispatch: true }
  );
}
