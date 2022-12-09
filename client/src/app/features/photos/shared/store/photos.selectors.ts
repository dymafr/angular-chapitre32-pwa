import { createFeatureSelector, createSelector } from '@ngrx/store';
import { photosReducerKey, PhotosState } from './photos.reducer';

export const selectPhotosFeature =
  createFeatureSelector<PhotosState>(photosReducerKey);

export const selectPhotoList = createSelector(
  selectPhotosFeature,
  (photoState: PhotosState) => photoState.photos
);

export const selectLoading = createSelector(
  selectPhotosFeature,
  (photoState: PhotosState) => photoState.loading
);
