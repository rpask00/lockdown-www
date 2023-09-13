import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  readonly resource = environment.apiUrl;


  constructor() { }
}
