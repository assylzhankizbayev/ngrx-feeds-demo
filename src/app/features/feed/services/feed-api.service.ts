import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

import { Feed, FeedResponse } from '../models';

@Injectable()
export class FeedApiService {
  constructor(private _http: HttpClient) {}

  public getRecommendedFeeds(): Observable<Feed> {
    return this._http
      .get<FeedResponse>('https://api.nutson.us/api/v2/media/feed/recommended')
      .pipe(map((response) => Feed.createFromApi(response.data)));
  }
}
