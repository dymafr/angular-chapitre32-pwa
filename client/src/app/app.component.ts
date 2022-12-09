import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from './shared/services/auth.service';
import { tryLogoutAction } from './shared/store/auth.actions';
import { selectIsLoggedin } from './shared/store/auth.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public isLoggedin$: Observable<boolean | null> =
    this.store.select(selectIsLoggedin);

  public logout() {
    this.store.dispatch(tryLogoutAction());
  }

  constructor(private store: Store, private swUpdate: SwUpdate) {
    console.log(this.swUpdate.isEnabled);

    this.swUpdate.checkForUpdate();

    this.swUpdate.versionUpdates.subscribe((version) => {
      console.log(version);
      if (version.type === 'VERSION_READY') {
        window.location.reload();
      }
    });
  }
}
