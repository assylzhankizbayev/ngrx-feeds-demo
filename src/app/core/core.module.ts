import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { authReducer } from './state/auth.reducer';
import { AuthEffects } from './state/auth.effects';
import { AuthApiService } from './services/auth-api.service';
import { AuthFacade } from './facade/auth.facade';

@NgModule({
  imports: [
    // General modules
    // -

    // App modules
    // StoreModule.forFeature('auth', authReducer),
    // EffectsModule.forFeature([AuthEffects]),

    // NPM modules
    // -
  ],
  declarations: [],
  providers: [AuthApiService, AuthFacade],
  exports: [],
})
export class CoreModule {}
