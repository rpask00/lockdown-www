import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {IdType, Login, LoginDto} from "../store/root.state";
import {Observable} from "rxjs";

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
    return this.http.post<Login>(`${this.resource}/logins`, login);
  }


  loadAll(): Observable<Login[]> {
    return this.http.get<Login[]>(`${this.resource}/logins`);
  }

  load(id: IdType): Observable<Login> {
    return this.http.get<Login>(`${this.resource}/login/` + id);
  }

  delete(id: IdType): Observable<void> {
    return this.http.delete<void>(`${this.resource}/login/` + id);
  }
}
