import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Attachment, IdType, SecuredNote, SecuredNoteDto} from '../store/root.state';
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

  loadAllAttachments(id: IdType): Observable<Attachment[]> {
    return this.http.get<Attachment[]>(`${this.resource}/secured_notes/${id}/attachments`);
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

  uploadAttachment(note_id: IdType, file: File) {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<Attachment[]>(`${this.resource}/secured_notes/${note_id}/attachments/`, formData);
  }

  downloadAttachment(id: IdType) {
    return this.http.get(`${this.resource}/attachments/` + id, {responseType: 'blob'});
  }
}
