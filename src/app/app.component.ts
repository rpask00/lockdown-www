import {Component, ViewChild} from '@angular/core';
import {MatDrawer} from "@angular/material/sidenav";
import {Store} from "@ngrx/store";
import {selectDetailsOpen} from "./store/root.selectors";
import {Observable} from "rxjs";
import {AppState} from "./app.module";

@Component({
  selector: 'lockdown-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('itemDetails') protected itemDetails?: MatDrawer;
  readonly window: Window = window;
  readonly detailsOpen$: Observable<boolean> = this._store.select(selectDetailsOpen);

  constructor(
    private _store: Store<AppState>,
  ) {
  }

}
