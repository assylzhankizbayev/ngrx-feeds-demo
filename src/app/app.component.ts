import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';

import { AuthFacade } from './core/facade/auth.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  constructor(
    private _authFacade: AuthFacade,
    private _cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this._authFacade.auth();
  }
}
