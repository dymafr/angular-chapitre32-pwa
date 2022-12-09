import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, of } from 'rxjs';
import { catchError, debounceTime, map, switchMap } from 'rxjs/operators';
import { Photo } from '../interfaces/photo.interface';
import { UnsplashService } from '../services/unsplash.service';
import {
  loadPhotosAction,
  searchPhotosSuccessAction,
  trySearchPhotosAction,
} from './photos.actions';

@Injectable()
export class PhotosEffects {
  trySearchPhotosEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(trySearchPhotosAction),
      debounceTime(1000),
      switchMap(({ search }) => {
        if (search.length) {
          this.store.dispatch(loadPhotosAction());
          return this.unsplashService.searchPhotos(search).pipe(
            map((photos: Photo[]) => searchPhotosSuccessAction({ photos })),
            catchError((err) => {
              console.error(err);
              return EMPTY;
            })
          );
        } else {
          return of(searchPhotosSuccessAction({ photos: [] }));
        }
      })
    )
  );

  constructor(
    private actions$: Actions,
    private unsplashService: UnsplashService,
    private store: Store
  ) {}
}
