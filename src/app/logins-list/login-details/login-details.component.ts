import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {loginQuery} from "../../store/root.actions";
import {ActivatedRoute} from "@angular/router";
import {selectLoginLoading} from "../../store/root.selectors";
import {AppState} from "../../app.module";
import {FormArray, FormBuilder, Validators} from "@angular/forms";
import {MatChipEditedEvent, MatChipInputEvent} from "@angular/material/chips";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {LoginDto} from "../../store/root.state";

@Component({
  selector: 'lockdown-login-details',
  templateUrl: './login-details.component.html',
  styleUrls: ['./login-details.component.scss']
})
export class LoginDetailsComponent implements OnInit {
  public showPassword = false;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  readonly loginId = this._activatedRoute.snapshot.params['id']
  readonly isNew = !this.loginId
  readonly loading$ = this._store.select(selectLoginLoading)

  readonly form = this._fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    email: ['', Validators.required],
    note: [''],
    linked_websites: this._fb.array<string>([]),
    collections: this._fb.array<string>([]),
  })

  get linked_websites() {
    return this.form.get('linked_websites') as FormArray
  }

  get collections() {
    return this.form.get('collections') as FormArray
  }

  constructor(
    private _store: Store<AppState>,
    private _activatedRoute: ActivatedRoute,
    private _fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    if (this.loginId) {
      this._store.dispatch(loginQuery.load({id: this.loginId}))
    }
  }

  add(event: MatChipInputEvent, array: FormArray): void {
    const value = (event.value || '').trim();
    if (value) {
      array.value.push(value)
    }
    event.chipInput!.clear();
  }

  edit(element: string, event: MatChipEditedEvent, array: FormArray) {
    const value = event.value.trim();
    const index = array.value.indexOf(element)

    if (!value) {
      array.removeAt(index);
    } else if (index >= 0) {
      array.value[index] = value
    }
  }

  save() {
    const login = this.form.value as LoginDto
    if (this.isNew) {
      this._store.dispatch(loginQuery.create({login}))
    } else {
      this._store.dispatch(loginQuery.update({id: this.loginId, login}))
    }
  }
}
