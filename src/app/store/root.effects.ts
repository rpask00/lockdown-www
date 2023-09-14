import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Store} from "@ngrx/store";
import {ToastrService} from "ngx-toastr";
import {RootState} from "./root.state";
import {userQuery} from "./root.actions";
import {catchError, map, of, switchMap} from "rxjs";
import {ResourceService} from "../services/resource.service";
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class RootEffects {
  constructor(
    private _actions$: Actions,
    private _store: Store<RootState>,
    private _toastr: ToastrService,
    private _router: Router,
    private _resourceService: ResourceService,
  ) {
  }

  register$ = createEffect(() => this._actions$.pipe(
    ofType(userQuery.register),
    switchMap(({user}) =>
      this._resourceService.registerUser(user).pipe(
        map((user) => {
          this._toastr.success('User registered successfully', 'Success');
          return userQuery.registerSuccess({user});
        }),
        catchError((error) => {
            this._toastr.error(error.message, 'Error occurred');
            return of(userQuery.registerFailed());
          }
        )
      ),
    )))


  login$ = createEffect(() => this._actions$.pipe(
    ofType(userQuery.login),
    switchMap(({username, password}) =>
      this._resourceService.login({username, password}).pipe(
        map((user) => {
          this._router.navigate(['/'])
          return userQuery.loginSuccess({user});
        }),
        catchError((error) => {
            this._toastr.error(error.message, 'Error occurred');
            return of(userQuery.loginFailed());
          }
        )
      ),
    )))
}
