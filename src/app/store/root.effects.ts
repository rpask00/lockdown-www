import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Store} from "@ngrx/store";
import {ToastrService} from "ngx-toastr";
import {RootState} from "./root.state";
import {loginQuery, paymentQuery, userQuery} from "./root.actions";
import {catchError, map, of, switchMap} from "rxjs";
import {Router} from "@angular/router";
import {AuthResource} from "../services/auth.resource.service";
import {LoginResource} from "../services/login.resource.service";
import {PaymentResource} from "../services/payment.resource.service";


@Injectable({
  providedIn: 'root'
})
export class RootEffects {
  constructor(
    private _actions$: Actions,
    private _store: Store<RootState>,
    private _toastr: ToastrService,
    private _router: Router,
    private _authResource: AuthResource,
    private _loginResource: LoginResource,
    private _paymentResource: PaymentResource,
  ) {
  }

  register$ = createEffect(() => this._actions$.pipe(
    ofType(userQuery.register),
    switchMap(({user}) =>
      this._authResource.registerUser(user).pipe(
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
      this._authResource.login({username, password}).pipe(
        map((user) => {
          this._router.navigate(['/logins'])
          return userQuery.loginSuccess({user});
        }),
        catchError((error) => {
            this._toastr.error(error.message, 'Error occurred');
            return of(userQuery.loginFailed());
          }
        )
      ),
    )))

  logout$ = createEffect(() => this._actions$.pipe(
    ofType(userQuery.logout),
    switchMap(() =>
      this._authResource.logout().pipe(
        map((user) => {
          this._router.navigate(['/auth'])
          return userQuery.logoutSuccess();
        }),
        catchError((error) => {
            this._toastr.error(error.message, 'Error occurred');
            return of(userQuery.loginFailed());
          }
        )
      ),
    )))

  createLogin$ = createEffect(() => this._actions$.pipe(
    ofType(loginQuery.create),
    switchMap(({login}) => {
        return this._loginResource.create(login).pipe(
          map((login) => {
            this._router.navigateByUrl('/logins')
            return loginQuery.createSuccess({login});
          }),
          catchError((error) => {
              this._toastr.error(error.message, 'Error occurred');
              return of(loginQuery.createFailed());
            }
          )
        )
      }
    )))

  loadAllLogins$ = createEffect(() => this._actions$.pipe(
    ofType(loginQuery.loadAll),
    switchMap(() => {
      return this._loginResource.loadAll().pipe(
        map((logins) => loginQuery.loadAllSuccess({logins})),
        catchError((error) => {
            this._toastr.error(error.message, 'Error occurred');
            return of(loginQuery.loadAllFailed());
          }
        )
      )

    })))

  loadLogin$ = createEffect(() => this._actions$.pipe(
    ofType(loginQuery.load),
    switchMap(({id}) => {
      return this._loginResource.load(id).pipe(
        map((login) => loginQuery.loadSuccess({login})),
        catchError((error) => {
            this._toastr.error(error.message, 'Error occurred');
            return of(loginQuery.loadFailed());
          }
        )
      )
    })))
  deleteLogin$ = createEffect(() => this._actions$.pipe(
    ofType(loginQuery.delete),
    switchMap(({id}) => {
      return this._loginResource.delete(id).pipe(
        map(() => {
          this._router.navigateByUrl('/logins')
          return loginQuery.deleteSuccess({id});
        }),
        catchError((error) => {
            this._toastr.error(error.message, 'Error occurred');
            return of(loginQuery.deleteFailed());
          }
        )
      )
    })))
  deleteMassLogin$ = createEffect(() => this._actions$.pipe(
    ofType(loginQuery.deleteMass),
    switchMap(({ids}) => {
      return this._loginResource.deleteMass(ids).pipe(
        map((ids) => {
          this._router.navigateByUrl('/logins')
          return loginQuery.deleteMassSuccess({ids: new Set(ids)});
        }),
        catchError((error) => {
            this._toastr.error(error.message, 'Error occurred');
            return of(loginQuery.deleteMassFailed());
          }
        )
      )
    })))

  updateLogin$ = createEffect(() => this._actions$.pipe(
    ofType(loginQuery.update),
    switchMap(({id, login}) => {
      return this._loginResource.update(id, login).pipe(
        map((login) => {
          this._router.navigateByUrl('/logins')
          return loginQuery.updateSuccess({login});
        }),
        catchError((error) => {
            this._toastr.error(error.message, 'Error occurred');
            return of(loginQuery.updateFailed());
          }
        )
      )
    })))


  createPayment$ = createEffect(() => this._actions$.pipe(
    ofType(paymentQuery.create),
    switchMap(({payment}) => {
        return this._paymentResource.create(payment).pipe(
          map((payment) => {
            this._router.navigateByUrl('/payments')
            return paymentQuery.createSuccess({payment});
          }),
          catchError((error) => {
              this._toastr.error(error.message, 'Error occurred');
              return of(paymentQuery.createFailed());
            }
          )
        )
      }
    )))


  loadAllPayments$ = createEffect(() => this._actions$.pipe(
    ofType(paymentQuery.loadAll),
    switchMap(() => {
      return this._paymentResource.loadAll().pipe(
        map((payments) => paymentQuery.loadAllSuccess({payments})),
        catchError((error) => {
            this._toastr.error(error.message, 'Error occurred');
            return of(paymentQuery.loadAllFailed());
          }
        )
      )
    })))


  loadPayment$ = createEffect(() => this._actions$.pipe(
    ofType(paymentQuery.load),
    switchMap(({id}) => {
      return this._paymentResource.load(id).pipe(
        map((payment) => paymentQuery.loadSuccess({payment})),
        catchError((error) => {
            this._toastr.error(error.message, 'Error occurred');
            return of(paymentQuery.loadFailed());
          }
        )
      )
    })))

}
