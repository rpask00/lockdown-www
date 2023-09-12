import {Component, ViewChild} from '@angular/core';
import {MatDrawer} from "@angular/material/sidenav";
import {Store} from "@ngrx/store";
import {map} from "rxjs";
import {AppState} from "./app.module";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs/operators";

@Component({
  selector: 'lockdown-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('itemDetails') protected itemDetails?: MatDrawer;
  readonly window: Window = window;
  readonly detailsOpen$ = this._router.events.pipe(
    filter((e) => e instanceof NavigationEnd),
    map((e) => /\([^)]*\)/.test((e as NavigationEnd).url))
  )

  constructor(
    private _store: Store<AppState>,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {
  }
}
