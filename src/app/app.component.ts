import { Component, OnInit } from '@angular/core';
import { AuthFacade } from './core/facade/auth.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ngrx-post-demo';

  constructor(private _authFacade: AuthFacade) {
    console.log('comp init');
    
  }

  ngOnInit(): void {
    this._authFacade.login({
      username: 'assylzhan',
      password: '12345',
    });
  }
}
