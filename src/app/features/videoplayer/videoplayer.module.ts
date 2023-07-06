import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';

import { VideoplayerComponent } from './videoplayer.component';

@NgModule({
  declarations: [VideoplayerComponent],
  imports: [
    // General modules
    CommonModule,

    // App modules
    // -

    // NPM modules
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
  ],
  exports: [VideoplayerComponent],
})
export class VideoplayerModule {}
