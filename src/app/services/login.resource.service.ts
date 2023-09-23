import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
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
    return this.http.get<Login>(`${this.resource}/logins/` + id);
  }

  delete(id: IdType): Observable<number[]> {
    return this.deleteMass([id]);
  }

  update(id:IdType, login: LoginDto): Observable<Login> {
    return this.http.put<Login>(`${this.resource}/logins/` + id, login);
  }

  deleteMass(ids: IdType[]):Observable<number[]> {
    const formData = new FormData();
    ids.forEach(id => formData.append('ids', id.toString()));

    return this.http.delete<number[]>(`${this.resource}/logins`, {
      body: formData,
    });
  }
}
