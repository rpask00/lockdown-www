import {Component, Input} from '@angular/core';
import {Login} from "../../store/root.state";

@Component({
  selector: 'lockdown-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @Input() login?: Login;

  get linked_websites() {
    if (this.login?.linked_websites && this.login?.linked_websites?.length > 0) {
      return this.login?.linked_websites[0]
    }
    return ''
  }
}
