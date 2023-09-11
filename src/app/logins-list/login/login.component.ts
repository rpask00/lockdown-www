import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Login, RootState} from "../../store/root.state";
import {Store} from "@ngrx/store";
import {loginQuery} from "../../store/root.actions";

@Component({
  selector: 'lockdown-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  @Input() login?: Login;

  constructor(
    private _store: Store<RootState>,
  ) {
  }

  get linked_websites() {
    if (this.login?.linked_websites && this.login?.linked_websites?.length > 0) {
      return this.login?.linked_websites[0]
    }
    return ''
  }


  showDetails() {
    this._store.dispatch(loginQuery.showDetails())
  }
}
