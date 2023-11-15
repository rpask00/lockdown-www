import {Component, ViewChild} from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';
import {filter} from 'rxjs/operators';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {map} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.module';
import {userQuery} from '../../store/root.actions';

@Component({
  selector: 'lockdown-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @ViewChild('itemDetails') protected itemDetails?: MatDrawer;
  readonly window: Window = window;
  readonly detailsOpen$ = this._router.events.pipe(
    filter((e) => e instanceof NavigationEnd),
    map((e) => /\([^)]*\)/.test((e as NavigationEnd).url))
  );

  constructor(
    private _store: Store<AppState>,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}

  logout() {
    this._store.dispatch(userQuery.logout());
  }
}
