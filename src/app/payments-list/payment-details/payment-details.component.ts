import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {firstValueFrom} from 'rxjs';
import {CardColor, PaymentDto} from '../../store/root.state';
import {ActivatedRoute} from '@angular/router';
import {selectPayment, selectPaymentLoading} from '../../store/root.selectors';
import {filter} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.module';
import {paymentQuery} from '../../store/root.actions';

@Component({
  selector: 'lockdown-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.scss']
})
export class PaymentDetailsComponent implements OnInit {
  readonly card_colors: CardColor[] = Object.values(CardColor);
  readonly paymentId = this._activatedRoute.snapshot.params['id'];

  readonly isNew = !this.paymentId;
  readonly loading$ = this._store.select(selectPaymentLoading);
  readonly payment$ = this._store.select(selectPayment).pipe(filter((payment) => !!payment));

  readonly form = this._fb.group({
    card_holder: ['', Validators.required],
    card_number: ['', [Validators.required]],
    security_code: [0, [Validators.required, Validators.min(100), Validators.max(999)]],
    expiration_month: [0, [Validators.required, Validators.min(1), Validators.max(12)]],
    expiration_year: [0, [Validators.required, Validators.min(2021), Validators.max(2030)]],
    name: [''],
    color: [CardColor.RED, Validators.required],
    note: ['']
  });

  constructor(
    private _fb: FormBuilder,
    private _activatedRoute: ActivatedRoute,
    private _store: Store<AppState>
  ) {}

  async ngOnInit() {
    if (!this.isNew) {
      this._store.dispatch(paymentQuery.load({id: this.paymentId}));
      const payment = await firstValueFrom(this.payment$);
      this.form.patchValue({...payment});
    }
  }

  delete() {
    this._store.dispatch(paymentQuery.delete({id: this.paymentId}));
  }

  save() {
    const payment = this.form.value as PaymentDto;
    if (this.isNew) {
      this._store.dispatch(paymentQuery.create({payment}));
    } else {
      this._store.dispatch(paymentQuery.update({id: this.paymentId, payment}));
    }
  }
}
