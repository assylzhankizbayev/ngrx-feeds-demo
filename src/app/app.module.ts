import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { authReducer } from './core/state/auth.reducer';
import { AuthFacade } from './core/facade/auth.facade';
import { AuthApiService } from './core/services/auth-api.service';
import { AuthEffects } from './core/state/auth.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    // General moodules
    BrowserModule,
    HttpClientModule,

    // App moodules
    AppRoutingModule,
    // StoreModule.forRoot({}),
    // EffectsModule.forRoot([]),
    StoreModule.forRoot({ auth: authReducer }),
    EffectsModule.forRoot([AuthEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    CoreModule,

    // NPM modules
    // -
  ],
  providers: [AuthApiService, AuthFacade],
  bootstrap: [AppComponent],
})
export class AppModule {}
