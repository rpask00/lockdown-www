import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

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

  public showLogin = true;

  readonly loginForm = this._fb.group({
    login: ['', Validators.required],
    password: ['', Validators.required],
  });

  login() {

  }

}
