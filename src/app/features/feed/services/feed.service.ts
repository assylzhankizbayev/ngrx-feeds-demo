import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { FeedResponse } from '../models';

@Injectable()
export class FeedService {
  constructor(private _http: HttpClient) {}

  public getRecommendedFeeds(): Observable<FeedResponse> {
    return this._http.get<FeedResponse>(
      'https://api.nutson.us/api/v2/media/feed/recommended'
    );
  }
}
