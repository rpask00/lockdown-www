import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {loginQuery} from "../../store/root.actions";
import {ActivatedRoute} from "@angular/router";
import {selectLoginLoading} from "../../store/root.selectors";
import {AppState} from "../../app.module";

@Component({
  selector: 'lockdown-login-details',
  templateUrl: './login-details.component.html',
  styleUrls: ['./login-details.component.scss']
})
export class LoginDetailsComponent implements OnInit {

  readonly loginId = this._activatedRoute.snapshot.params['id']
  readonly loading$ = this._store.select(selectLoginLoading)
  constructor(
    private _store: Store<AppState>,
    private _activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this._store.dispatch(loginQuery.load({id: this.loginId}))
  }

}
