import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Photo } from '../interfaces/photo.interface';
import { createApi } from 'unsplash-js';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UnsplashService {
  private accessKey =
    'd735ade0117e703f4c8b2ef98cfd27879291d34c8de2d7dd261616f684df435c';

  private unsplash = createApi({
    accessKey: this.accessKey,
  });

  constructor() {}

  public searchPhotos(search: string): Observable<Photo[]> {
    return from(
      this.unsplash.search.getPhotos({ query: search, orientation: 'squarish' })
    ).pipe(
      map((result: any) =>
        result.response?.results.map((r: any) => ({ url: r.urls.small }))
      )
    );
  }
}
