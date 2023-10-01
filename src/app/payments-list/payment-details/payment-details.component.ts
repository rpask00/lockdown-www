import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {of} from "rxjs";
import {CardColor, PaymentDto} from "../../store/root.state";
import {ActivatedRoute} from "@angular/router";
import {selectLogin, selectLoginLoading, selectPayment, selectPaymentLoading} from "../../store/root.selectors";
import {filter} from "rxjs/operators";
import {Store} from "@ngrx/store";
import {AppState} from "../../app.module";
import {paymentQuery} from "../../store/root.actions";

@Component({
  selector: 'lockdown-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.scss']
})
export class PaymentDetailsComponent {
  readonly card_colors: CardColor[] = Object.values(CardColor)
  readonly paymentId = this._activatedRoute.snapshot.params['id']

  readonly isNew = !this.paymentId
  readonly loading$ = this._store.select(selectPaymentLoading)
  readonly login$ = this._store.select(selectPayment).pipe(filter(payment => !!payment))


  readonly form = this._fb.group({
    card_holder: ['', Validators.required],
    card_number: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
    security_code: [0, [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
    expiration_month: [0, [Validators.required, Validators.min(1), Validators.max(12)]],
    expiration_year: [0, [Validators.required, Validators.min(2021), Validators.max(2030)]],
    name: [''],
    color: [CardColor.RED, Validators.required],
    note: [''],
  })

  constructor(
    private _fb: FormBuilder,
    private _activatedRoute: ActivatedRoute,
    private _store: Store<AppState>,
  ) {
  }

  delete() {

  }

  save() {
    const payment = this.form.value as PaymentDto;
    if (this.isNew) {
      this._store.dispatch(paymentQuery.create({payment}))
    } else {
      this._store.dispatch(paymentQuery.update({id: this.paymentId, payment}))
    }
  }
}
