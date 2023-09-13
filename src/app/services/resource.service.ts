import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {User, UserDto} from "../store/root.state";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  readonly resource = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) {
  }

  registerUser(user: UserDto): Observable<User> {
    return this.http.post<User>(`${this.resource}/user`, user);
  }
}
