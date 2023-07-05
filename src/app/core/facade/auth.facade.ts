import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as AuthActions from '../state/auth.actions';

@Injectable()
export class AuthFacade {
  constructor(private _store: Store) {}

  public login(payload: AuthActions.LoginActionPayload): void {
    console.log('facade call');
    
    this._store.dispatch(AuthActions.LoginAction(payload));
  }
}
