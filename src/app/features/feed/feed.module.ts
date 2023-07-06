import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { FeedRoutingModule } from './feed-routing.module';
import { FeedComponent } from './feed.component';
import { FeedApiService } from './services/feed-api.service';
import { feedReducer } from './store/feed.reducer';
import { FeedEffects } from './store/feed.effects';
import { FeedStoreService } from './services/feed-store.service';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [FeedComponent],
  imports: [
    // General modules
    CommonModule,
    ReactiveFormsModule,

    // App modules
    FeedRoutingModule,
    StoreModule.forFeature('feed', feedReducer),
    EffectsModule.forFeature([FeedEffects]),
    SharedModule,
  ],
  providers: [FeedApiService, FeedStoreService],
})
export class FeedModule {}
