import {CanActivateFn} from '@angular/router';
import {Injectable} from "@angular/core";
import {firstValueFrom} from "rxjs";
import {ResourceService} from "../services/resource.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  private _authorized: boolean | null = null;

  constructor(
    private _resourceService: ResourceService,
  ) {
  }

  private async _checkStatus() {
    if (this._authorized === null) {
      this._authorized = await firstValueFrom(this._resourceService.status());
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
