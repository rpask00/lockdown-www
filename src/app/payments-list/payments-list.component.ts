import {Component, OnInit} from '@angular/core';
import {CardColor, Payment, RootState} from "../store/root.state";
import {Store} from "@ngrx/store";
import {paymentQuery} from "../store/root.actions";
import {selectPaymentLoading, selectPayments} from "../store/root.selectors";
import {AppState} from "../app.module";

@Component({
  selector: 'lockdown-payments-list',
  templateUrl: './payments-list.component.html',
  styleUrls: ['./payments-list.component.scss']
})
export class PaymentsListComponent implements OnInit {
  readonly payments$ = this._store.select(selectPayments)
  readonly paymentsLoading$ = this._store.select(selectPaymentLoading);

  constructor(
    private _store: Store<AppState>
  ) {
  }

  payments: Payment[] = [
    {
      id: '1',
      card_holder: 'John Doe',
      card_number: '1234 5678 9012 3456',
      security_code: 123,
      expiration_month: 1,
      expiration_year: 2021,
      name: 'mBank',
      color: CardColor.GREEN,
      note: 'This is a note',
    }
  ]

  ngOnInit(): void {
    this._store.dispatch(paymentQuery.loadAll())
  }
}
