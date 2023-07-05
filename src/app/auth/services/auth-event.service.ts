import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class AuthEventService {
  /**
   * Auth store & state events
   */
  public readonly authStoreConnected$: Observable<void>;

  protected readonly _authStoreConnected$: Subject<void>;

  constructor() {
    this._authStoreConnected$ = new Subject();

    this.authStoreConnected$ = this._authStoreConnected$.asObservable();
  }

  public triggerAuthStoreConnectedEvent(): void {
    this._authStoreConnected$.next();
  }
}
