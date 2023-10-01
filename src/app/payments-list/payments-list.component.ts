import {Component} from '@angular/core';
import {CardColor, Payment} from "../store/root.state";

@Component({
  selector: 'lockdown-payments-list',
  templateUrl: './payments-list.component.html',
  styleUrls: ['./payments-list.component.scss']
})
export class PaymentsListComponent {

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
}
