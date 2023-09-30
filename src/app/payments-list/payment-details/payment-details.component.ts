import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {of} from "rxjs";
import {CardColor} from "../../store/root.state";

@Component({
  selector: 'lockdown-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.scss']
})
export class PaymentDetailsComponent {
  readonly loading$ = of(false)
  readonly card_colors :CardColor[] = Object.values(CardColor)


  readonly form = this._fb.group({
    card_holder: ['', Validators.required],
    card_number: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
    security_code: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
    expiration_month: ['', [Validators.required, Validators.min(1), Validators.max(12)]],
    expiration_year: ['', [Validators.required, Validators.min(2021), Validators.max(2030)]],
    name: [''],
    color: [CardColor.RED, Validators.required],
    note: [''],
  })

  constructor(
    private _fb: FormBuilder,
  ) {
  }

  delete() {

  }

  save() {

  }
}
