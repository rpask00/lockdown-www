import {CanActivateFn} from '@angular/router';
import {Injectable} from "@angular/core";
import {firstValueFrom} from "rxjs";
import {AuthResource} from "../services/auth.resource.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  private _authorized: boolean | null = null;

  constructor(
    private _authResource: AuthResource,
  ) {
  }

  private async _checkStatus() {
    if (this._authorized === null) {
      this._authorized = await firstValueFrom(this._authResource.status());
    }
  }

  unauthorized: CanActivateFn = async (route, state) => {
    await this._checkStatus()
    return this._authorized === false;
  }

  authorized: CanActivateFn = async (route, state) => {
    await this._checkStatus()
    return this._authorized === true;
  }
}
