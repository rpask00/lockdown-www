import {Component, OnInit} from '@angular/core';
import {securedNotesQuery} from "../store/root.actions";
import {Store} from "@ngrx/store";
import {AppState} from "../app.module";
import {selectSecuredNotes, selectSecuredNotesLoading} from "../store/root.selectors";

@Component({
  selector: 'lockdown-secured-notes-list',
  templateUrl: './secured-notes-list.component.html',
  styleUrls: ['./secured-notes-list.component.scss']
})
export class SecuredNotesListComponent implements OnInit{
  readonly securedNotesLoading$ = this._store.select(selectSecuredNotesLoading);
  readonly securedNotes$ = this._store.select(selectSecuredNotes);
  constructor(private _store: Store<AppState>) {}

  ngOnInit(): void {
    this._store.dispatch(securedNotesQuery.loadAll());
  }
}
