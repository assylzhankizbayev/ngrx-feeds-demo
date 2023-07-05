import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { FeedModule } from './features/feed/feed.module';

import { authReducer } from './core/store/auth.reducer';
import { AuthFacade } from './core/facade/auth.facade';
import { AuthEffects } from './core/store/auth.effects';
import { AuthApiService } from './core/services/auth-api.service';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';

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
    FeedModule,

    // NPM modules
    // -
  ],
  providers: [
    AuthApiService,
    AuthFacade,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
