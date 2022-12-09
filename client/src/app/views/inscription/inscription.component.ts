import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { tryInscriptionAction } from 'src/app/shared/store/auth.actions';
import { selectError } from 'src/app/shared/store/auth.selectors';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss'],
})
export class InscriptionComponent implements OnInit {
  public form: FormGroup = this.fb.group({
    email: ['', Validators.required],
    name: ['', Validators.required],
    password: ['', Validators.required],
  });
  public error$: Observable<string | null> = this.store.select(selectError);

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {}

  public submit() {
    if (this.form.valid) {
      this.store.dispatch(
        tryInscriptionAction({ user: this.form.getRawValue() })
      );
    }
  }
}
