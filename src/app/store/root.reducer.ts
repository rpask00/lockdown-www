import {createReducer} from '@ngrx/store';
import {initialState} from "./root.state";


export const rootReducer = createReducer(
  initialState,

);
