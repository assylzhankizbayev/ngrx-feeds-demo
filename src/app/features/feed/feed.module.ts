import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedRoutingModule } from './feed-routing.module';
import { FeedComponent } from './feed.component';
import { FeedApiService } from './services/feed-api.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { feedReducer } from './store/feed.reducer';
import { FeedEffects } from './store/feed.effects';
import { FeedStoreService } from './services/feed-store.service';

@NgModule({
  declarations: [FeedComponent],
  imports: [
    // General modules
    CommonModule,

    // App modules
    FeedRoutingModule,
    StoreModule.forFeature('feed', feedReducer),
    EffectsModule.forFeature([FeedEffects]),
  ],
  providers: [FeedApiService, FeedStoreService],
})
export class FeedModule {}
