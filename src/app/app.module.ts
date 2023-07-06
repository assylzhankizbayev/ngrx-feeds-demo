import { APP_INITIALIZER, NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { Store, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';

import { authReducer } from './auth/store/auth.reducer';
import { AuthEffects } from './auth/store/auth.effects';
import { AuthService } from './auth/services/auth.service';
import { AuthApiService } from './auth/services/auth-api.service';
import { AuthInterceptor } from './auth/interceptors/auth.interceptor';
import { AuthEventService } from './auth/services/auth-event.service';
import { AuthStoreService } from './auth/services/auth-store.service';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

function appInitializerFactory(
  store: Store,
  authStoreService: AuthStoreService
) {
  return (): void => {
    // Auth initialize
    authStoreService.dispatchLoadAction();
  };
}

@NgModule({
  declarations: [AppComponent, DefaultLayoutComponent],
  imports: [
    // General moodules
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,

    // App moodules
    AppRoutingModule,
    StoreModule.forRoot({ auth: authReducer }),
    EffectsModule.forRoot([AuthEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    SharedModule,

    // NPM modules
    // -
  ],
  providers: [
    AuthApiService,
    AuthEventService,
    AuthStoreService,
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFactory,
      deps: [Store, AuthStoreService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
