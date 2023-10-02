import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {AppState} from "../../app.module";
import {Store} from "@ngrx/store";
import {CardColor} from "../../store/root.state";
import {selectSecuredNoteLoading} from "../../store/root.selectors";

@Component({
  selector: 'lockdown-secured-note-details',
  templateUrl: './secured-note-details.component.html',
  styleUrls: ['./secured-note-details.component.scss']
})
export class SecuredNoteDetailsComponent {
  readonly card_colors: CardColor[] = Object.values(CardColor);
  readonly loading$ = this._store.select(selectSecuredNoteLoading);

  readonly securedNoteId = this._activatedRoute.snapshot.params['id'];
  readonly isNew = !this.securedNoteId;

  readonly form = this._fb.group({
    title: ['', Validators.required],
    note: ['', Validators.required],
    color: [CardColor.RED, Validators.required],
  });

  constructor(
    private _store: Store<AppState>,
    private _activatedRoute: ActivatedRoute,
    private _fb: FormBuilder

  ) {
  }

  delete() {

  }

  save() {

  }
}
