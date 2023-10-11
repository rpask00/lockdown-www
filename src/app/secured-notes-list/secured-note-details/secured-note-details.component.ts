import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {AppState} from "../../app.module";
import {Store} from "@ngrx/store";
import {CardColor, SecuredNoteDto} from "../../store/root.state";
import {selectSecuredNote, selectSecuredNoteLoading} from "../../store/root.selectors";
import {securedNotesQuery} from "../../store/root.actions";
import {firstValueFrom} from "rxjs";
import {filter} from "rxjs/operators";

@Component({
  selector: 'lockdown-secured-note-details',
  templateUrl: './secured-note-details.component.html',
  styleUrls: ['./secured-note-details.component.scss']
})
export class SecuredNoteDetailsComponent implements OnInit{
  readonly card_colors: CardColor[] = Object.values(CardColor);
  readonly loading$ = this._store.select(selectSecuredNoteLoading);
  readonly securedNote$ = this._store.select(selectSecuredNote).pipe(filter((securedNote) => !!securedNote));

  readonly securedNoteId = this._activatedRoute.snapshot.params['id'];
  readonly isNew = !this.securedNoteId;

  readonly form = this._fb.group({
    name: ['', Validators.required],
    content: ['', Validators.required],
    color: [CardColor.RED, Validators.required],
  });

  constructor(
    private _store: Store<AppState>,
    private _activatedRoute: ActivatedRoute,
    private _fb: FormBuilder

  ) {
  }

  async ngOnInit() {
    if (!this.isNew) {
      this._store.dispatch(securedNotesQuery.load({id: this.securedNoteId}));
      const securedNote = await firstValueFrom(this.securedNote$);
      this.form.patchValue({...securedNote});
    }
  }


  delete() {
    this._store.dispatch(securedNotesQuery.delete({id: this.securedNoteId}));
  }

  save() {
    const secured_note = this.form.value as SecuredNoteDto;
    if (this.isNew) {
      this._store.dispatch(securedNotesQuery.create({secured_note}));
    } else {
      this._store.dispatch(securedNotesQuery.update({id: this.securedNoteId, secured_note}));
    }
  }
}
