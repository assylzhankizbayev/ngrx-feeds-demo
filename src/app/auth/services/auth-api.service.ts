import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

import { AuthResponse, AuthToken, LoginPayload } from '../models';

@Injectable({ providedIn: 'root' })
export class AuthApiService {
  constructor(private _http: HttpClient) {}

  public login(payload: LoginPayload): Observable<AuthToken> {
    return this._http
      .post<AuthResponse>('https://api.nutson.us/api/v3/auth/session', payload)
      .pipe(map((response) => AuthToken.createFromApi(response.data)));
  }
}
