import {Injectable} from "@angular/core";
import {HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {catchError, tap, throwError} from "rxjs";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private _router: Router,
    private _toastr: ToastrService
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authReq = req.clone({
      withCredentials: true
    })


    return next.handle(authReq).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error && error.status === 401) {
          this._router.navigateByUrl('/auth')
          this._toastr.error('Session expired', 'Unauthorized')
        }

        return throwError(() => error);
      })
    )
  }


}
