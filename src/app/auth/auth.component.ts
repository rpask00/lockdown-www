import {Component} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {Actions, ofType} from "@ngrx/effects";
import {AppState} from "../app.module";
import {Store} from "@ngrx/store";
import {userLoading} from "../store/root.selectors";
import {userQuery} from "../store/root.actions";
import {LoginRequest, UserDto} from "../store/root.state";
import {startWith} from "rxjs";

@Component({
  selector: 'lockdown-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  constructor(
    private _fb: FormBuilder,
    private _actions$: Actions,
    private _store: Store<AppState>,
  ) {
  }

  public showLoginPanel = true;

  readonly loginForm = this._fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  readonly registerForm = this._fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    repeatedPassword: ['', [
      Validators.required,
      (control: FormControl) => {
        if (control.value !== this.registerForm?.get('password')?.value) {
          return {passwordsNotMatch: true};
        }
        return null;
      }
    ]],
    email: ['', [Validators.required, Validators.email]],
    first_name: ['', Validators.required],
    last_name: ['', Validators.required],
  });
  userLoading$ = this._store.select(userLoading);

  registrationSuccess$ = this._actions$.pipe(
    ofType(userQuery.registerSuccess),
    startWith(null)
  );

  register() {
    this._store.dispatch(userQuery.register({user: this.registerForm.value as UserDto}));
  }

  login() {
    this._store.dispatch(userQuery.login(this.loginForm.value as LoginRequest));
  }

}
