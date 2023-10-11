import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {IdType, SecuredNote, SecuredNoteDto} from '../store/root.state';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecuredNoteResource {
  readonly resource = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  create(secured_note: SecuredNoteDto): Observable<SecuredNote> {
    return this.http.post<SecuredNote>(`${this.resource}/secured_notes`, secured_note);
  }

  loadAll(): Observable<SecuredNote[]> {
    return this.http.get<SecuredNote[]>(`${this.resource}/secured_notes`);
  }

  load(id: IdType): Observable<SecuredNote> {
    return this.http.get<SecuredNote>(`${this.resource}/secured_notes/` + id);
  }

  delete(id: IdType): Observable<void> {
    return this.http.delete<void>(`${this.resource}/secured_notes/` + id);
  }

  update(id: IdType, secured_note: SecuredNoteDto): Observable<SecuredNote> {
    return this.http.put<SecuredNote>(`${this.resource}/secured_notes/` + id, secured_note);
  }


}
