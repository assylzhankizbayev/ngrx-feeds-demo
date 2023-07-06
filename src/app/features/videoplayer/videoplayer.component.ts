import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { VgApiService } from '@videogular/ngx-videogular/core';
import { first } from 'rxjs';

@Component({
  selector: 'app-videoplayer',
  templateUrl: './videoplayer.component.html',
  styleUrls: ['./videoplayer.component.scss'],
})
export class VideoplayerComponent {
  public api: VgApiService | null = null;

  constructor(
    private _dialogRef: MatDialogRef<VideoplayerComponent>,
    @Inject(MAT_DIALOG_DATA) public mediaUrl: string
  ) {}

  public onPlayerReady(source: VgApiService): void {
    this.api = source;
    this.api
      .getDefaultMedia()
      ?.subscriptions?.loadedMetadata.pipe(first())
      .subscribe(() => {
        this._autoPlay();
      });
  }

  private _autoPlay(): void {
    this.api?.play();
  }
}
