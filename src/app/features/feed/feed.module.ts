import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedRoutingModule } from './feed-routing.module';
import { FeedComponent } from './feed.component';
import { FeedService } from './services/feed.service';

@NgModule({
  declarations: [FeedComponent],
  imports: [
    // General modules
    CommonModule,

    // App modules
    FeedRoutingModule,
  ],
  providers: [FeedService],
})
export class FeedModule {}
