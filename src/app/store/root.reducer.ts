import {createReducer, on} from '@ngrx/store';
import {initialState} from "./root.state";
import {closeDetails, loginQuery, userQuery} from "./root.actions";


export const rootReducer = createReducer(
  initialState,
  on(loginQuery.load, (state) => ({...state, loginLoading: true})),
  on(loginQuery.loadSuccess, loginQuery.loadFailed, (state) => ({...state, loginLoading: true})),

  on(userQuery.register, userQuery.login, userQuery.load, (state) => ({...state, userLoading: true})),
  on(userQuery.loginSuccess, userQuery.loginFailed, userQuery.registerSuccess, userQuery.registerFailed, userQuery.loadSuccess, userQuery.loadFailed, (state) => ({
    ...state,
    userLoading: false
  })),
  on(userQuery.loadSuccess, userQuery.loginSuccess, (state, {user}) => ({...state, user})),

  on(closeDetails, (state) => ({
    ...state,
    detailsOpen: false
  }))
);
