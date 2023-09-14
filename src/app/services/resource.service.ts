import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {LoginRequest, User, UserDto} from "../store/root.state";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  readonly resource = environment.apiUrl;

  constructor(
    private http: HttpClient,
  ) {
  }

  status(): Observable<boolean> {
    return this.http.get<boolean>(`${this.resource}/status`);
  }

  registerUser(user: UserDto): Observable<User> {
    return this.http.post<User>(`${this.resource}/user`, user);
  }

  login(credentials: LoginRequest): Observable<User> {
    return this.http.post<User>(`${this.resource}/login`, credentials);
  }

  logout() {
    return this.http.get(`${this.resource}/logout`);
  }
}
