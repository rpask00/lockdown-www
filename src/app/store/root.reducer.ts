import {createReducer, on} from '@ngrx/store';
import {initialState} from "./root.state";
import {closeDetails, loginQuery} from "./root.actions";


export const rootReducer = createReducer(
  initialState,
  on(loginQuery.load, (state) => ({...state, loginLoading: true})),
  on(loginQuery.loadSuccess, loginQuery.loadFailed, (state) => ({...state, loginLoading: true})),

  on(closeDetails, (state) => ({
    ...state,
    detailsOpen: false
  }))
);
