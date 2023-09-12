import {Component} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'lockdown-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  constructor(
    private _fb: FormBuilder,
  ) {
  }

  public showLogin = false;

  readonly loginForm = this._fb.group({
    login: ['', Validators.required],
    password: ['', Validators.required],
  });

  readonly registerForm = this._fb.group({
    login: ['', [Validators.required, Validators.minLength(5)]],
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
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
  });

  login() {

  }

}
