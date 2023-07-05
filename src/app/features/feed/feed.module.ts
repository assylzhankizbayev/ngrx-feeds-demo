import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedRoutingModule } from './feed-routing.module';
import { FeedComponent } from './feed.component';
import { FeedService } from './services/feed-api.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { feedReducer } from './store/feed.reducer';

@NgModule({
  declarations: [FeedComponent],
  imports: [
    // General modules
    CommonModule,

    // App modules
    FeedRoutingModule,
    StoreModule.forFeature('feed', feedReducer),
    EffectsModule.forFeature([]),
  ],
  providers: [FeedService],
})
export class FeedModule {}
