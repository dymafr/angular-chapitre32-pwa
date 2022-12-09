import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, first, map, tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { selectIsLoggedin } from '../store/auth.selectors';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.store.select(selectIsLoggedin).pipe(
      filter((x) => x !== null),
      first(),
      map((isLoggedin: boolean | null) => {
        if (!isLoggedin) {
          this.router.navigateByUrl('/connexion');
          return false;
        } else {
          return true;
        }
      })
    );
  }
}
