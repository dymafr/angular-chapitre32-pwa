import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { LayoutModule } from 'src/app/shared/modules/layout.module';
import { PHOTOS_ROUTES } from './photos.routes';
import { PhotosSearchComponent } from './views/photos-search/photos-search.component';
import { PhotosListComponent } from './views/photos-search/components/photos-list/photos-list.component';
import { PhotosSearchbarComponent } from './views/photos-search/components/photos-searchbar/photos-searchbar.component';
import { photosReducer, photosReducerKey } from './shared/store/photos.reducer';
import { PhotosEffects } from './shared/store/photos.effects';

@NgModule({
  declarations: [
    PhotosSearchComponent,
    PhotosListComponent,
    PhotosSearchbarComponent,
  ],
  imports: [
    LayoutModule,
    FormsModule,
    RouterModule.forChild(PHOTOS_ROUTES),
    StoreModule.forFeature(photosReducerKey, photosReducer),
    EffectsModule.forFeature([PhotosEffects]),
  ],
})
export class PhotosModule {}
