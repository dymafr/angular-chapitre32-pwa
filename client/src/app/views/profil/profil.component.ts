import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/interfaces/user.interface';
import { AuthService } from 'src/app/shared/services/auth.service';
import { selectCurrentUser } from 'src/app/shared/store/auth.selectors';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
})
export class ProfilComponent implements OnInit {
  public user$: Observable<User | null> = this.store.select(selectCurrentUser);

  constructor(private store: Store) {}

  ngOnInit(): void {}
}
