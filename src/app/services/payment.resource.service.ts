import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {IdType, Payment, PaymentDto} from "../store/root.state";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PaymentResource {
  readonly resource = environment.apiUrl;

  constructor(
    private http: HttpClient,
  ) {
  }

  create(login: PaymentDto): Observable<Payment> {
    return this.http.post<Payment>(`${this.resource}/payments`, login);
  }

  loadAll(): Observable<Payment[]> {
    return this.http.get<Payment[]>(`${this.resource}/payments`);
  }

  load(id: IdType): Observable<Payment> {
    return this.http.get<Payment>(`${this.resource}/payments/` + id);
  }

  delete(id: IdType): Observable<number[]> {
    return this.http.delete<number[]>(`${this.resource}/payments/` + id);
  }

  update(id:IdType, login: PaymentDto): Observable<Payment> {
    return this.http.put<Payment>(`${this.resource}/payments/` + id, login);
  }
}
