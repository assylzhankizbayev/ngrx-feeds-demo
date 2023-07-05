import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthResponse, LoginPayload } from '../models';

@Injectable({ providedIn: 'root' })
export class AuthApiService {
  constructor(private _http: HttpClient) {}

  public login(payload: LoginPayload): Observable<AuthResponse> {
    return this._http.post<AuthResponse>(
      'https://api.nutson.us/api/v3/auth/session',
      payload
    );
  }
}
