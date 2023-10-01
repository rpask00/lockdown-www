import {createReducer, on} from '@ngrx/store';
import {initialState} from "./root.state";
import {closeDetails, loginQuery, paymentQuery, userQuery} from "./root.actions";


export const rootReducer = createReducer(
  initialState,
  // LOGINS
  on(loginQuery.load, (state) => ({...state, loginLoading: true})),
  on(loginQuery.loadSuccess, loginQuery.loadFailed, (state) => ({...state, loginLoading: false})),

  on(loginQuery.loadAll, (state) => ({...state, loginsLoading: true})),
  on(loginQuery.loadAllSuccess, loginQuery.loadFailed, (state) => ({...state, loginsLoading: false})),
  on(loginQuery.loadAllSuccess, (state, {logins}) => ({...state, logins})),

  on(loginQuery.load, (state) => ({...state, loginsLoading: true})),
  on(loginQuery.loadSuccess, loginQuery.loadFailed, (state) => ({...state, loginsLoading: false})),
  on(loginQuery.loadSuccess, (state, {login}) => ({...state, login})),

  on(loginQuery.deleteSuccess, (state, {id}) => ({
    ...state,
    logins: (state.logins || []).filter(login => login.id != id)
  })),
  on(loginQuery.deleteMassSuccess, (state, {ids}) => ({
    ...state,
    logins: (state.logins || []).filter(login => !ids.has(login.id))
  })),
  on(loginQuery.createSuccess, (state, {login}) => ({...state, logins: [...(state.logins || []), login]})),
  on(loginQuery.updateSuccess, (state, {login}) => ({
    ...state,
    logins: (state.logins || []).map(l => l.id == login.id ? login : l)
  })),

  // PAYMENTS
  on(paymentQuery.createSuccess, (state, {payment}) => ({...state, payments: [...(state.payments || []), payment]})),


  on(userQuery.register, userQuery.login, userQuery.load, (state) => ({...state, userLoading: true})),
  on(userQuery.loginSuccess, userQuery.loginFailed, userQuery.registerSuccess, userQuery.registerFailed, userQuery.loadSuccess, userQuery.loadFailed, (state) => ({
    ...state,
    userLoading: false
  })),
  on(userQuery.loadSuccess, userQuery.loginSuccess, (state, {user}) => ({...state, user})),
  on(userQuery.logoutSuccess, (state) => ({...state, user: undefined})),

  on(closeDetails, (state) => ({
    ...state,
    detailsOpen: false
  }))
);
