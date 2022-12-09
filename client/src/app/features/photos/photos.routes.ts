import { Routes } from '@angular/router';
import { PhotosSearchComponent } from './views/photos-search/photos-search.component';

export const PHOTOS_ROUTES: Routes = [
  {
    path: '',
    component: PhotosSearchComponent,
  },
];
