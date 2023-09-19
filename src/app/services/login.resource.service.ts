import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Login, LoginDto, LoginRequest, User, UserDto} from "../store/root.state";
import {Observable} from "rxjs";
import {fromPromise} from "rxjs/internal/observable/innerFrom";

@Injectable({
  providedIn: 'root'
})
export class LoginResource {
  readonly resource = environment.apiUrl;

  constructor(
    private http: HttpClient,
  ) {
  }

  create(login: LoginDto): Observable<Login> {
    return this.http.post<Login>(`${this.resource}/logins`, login, {withCredentials: true});
  }


}
