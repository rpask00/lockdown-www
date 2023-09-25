import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Payment} from "../../store/root.state";

@Component({
  selector: 'lockdown-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaymentComponent {
  @Input() payment?: Payment;
}
