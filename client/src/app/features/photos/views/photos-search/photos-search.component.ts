import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Photo } from '../../shared/interfaces/photo.interface';
import { trySearchPhotosAction } from '../../shared/store/photos.actions';
import {
  selectLoading,
  selectPhotoList,
} from '../../shared/store/photos.selectors';

@Component({
  selector: 'app-photos-search',
  templateUrl: './photos-search.component.html',
  styleUrls: ['./photos-search.component.scss'],
})
export class PhotosSearchComponent {
  public photos$: Observable<Photo[]> = this.store.select(selectPhotoList);
  public isLoading$: Observable<boolean> = this.store.select(selectLoading);
  constructor(private store: Store) {}
  public searchPhoto(search: string) {
    this.store.dispatch(trySearchPhotosAction({ search }));
  }
}
