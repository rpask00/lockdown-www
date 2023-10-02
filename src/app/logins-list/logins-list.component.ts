import {Component, OnInit} from '@angular/core';
import {IdType} from '../store/root.state';
import {AppState} from '../app.module';
import {Store} from '@ngrx/store';
import {loginQuery} from '../store/root.actions';
import {selectLogins, selectLoginsLoading} from '../store/root.selectors';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'lockdown-logins-list',
  templateUrl: './logins-list.component.html',
  styleUrls: ['./logins-list.component.scss']
})
export class LoginsListComponent implements OnInit {
  readonly selectedLogins = new FormControl<IdType[]>([]);
  readonly logins$ = this._store.select(selectLogins);
  readonly loginsLoading$ = this._store.select(selectLoginsLoading);

  constructor(private _store: Store<AppState>) {}

  ngOnInit(): void {
    this._store.dispatch(loginQuery.loadAll());
  }

  removeSelected() {
    this._store.dispatch(loginQuery.deleteMass({ids: this.selectedLogins.value || []}));
    this.selectedLogins.setValue([]);
  }
}
