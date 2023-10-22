import {createReducer, on} from '@ngrx/store';
import {initialState} from './root.state';
import {
  closeDetails,
  loginQuery,
  noteAttachmentsQuery,
  paymentQuery,
  securedNotesQuery,
  userQuery
} from './root.actions';

export const rootReducer = createReducer(
  initialState,
  // LOGINS
  on(loginQuery.load, (state) => ({...state, loginLoading: true})),
  on(loginQuery.loadSuccess, loginQuery.loadFailed, (state) => ({
    ...state,
    loginLoading: false
  })),

  on(loginQuery.loadAll, (state) => ({...state, loginsLoading: true})),
  on(loginQuery.loadAllSuccess, loginQuery.loadFailed, (state) => ({
    ...state,
    loginsLoading: false
  })),
  on(loginQuery.loadAllSuccess, (state, {logins}) => ({...state, logins})),

  on(loginQuery.load, (state) => ({
    ...state,
    loginsLoading: true,
    login: undefined
  })),
  on(loginQuery.loadSuccess, loginQuery.loadFailed, (state) => ({
    ...state,
    loginsLoading: false
  })),
  on(loginQuery.loadSuccess, (state, {login}) => ({...state, login})),

  on(loginQuery.deleteSuccess, (state, {id}) => ({
    ...state,
    logins: (state.logins || []).filter((login) => login.id != id)
  })),
  on(loginQuery.deleteMassSuccess, (state, {ids}) => ({
    ...state,
    logins: (state.logins || []).filter((login) => !ids.has(login.id))
  })),
  on(loginQuery.createSuccess, (state, {login}) => ({
    ...state,
    logins: [...(state.logins || []), login]
  })),
  on(loginQuery.updateSuccess, (state, {login}) => ({
    ...state,
    logins: (state.logins || []).map((l) => (l.id == login.id ? login : l))
  })),

  // PAYMENTS
  on(paymentQuery.createSuccess, (state, {payment}) => ({
    ...state,
    payments: [...(state.payments || []), payment]
  })),

  on(paymentQuery.loadAll, (state) => ({...state, paymentsLoading: true})),
  on(paymentQuery.loadAllSuccess, paymentQuery.loadFailed, (state) => ({
    ...state,
    paymentsLoading: false
  })),
  on(paymentQuery.loadAllSuccess, (state, {payments}) => ({
    ...state,
    payments
  })),

  on(paymentQuery.load, (state) => ({
    ...state,
    paymentLoading: true,
    payment: undefined
  })),
  on(paymentQuery.loadSuccess, paymentQuery.loadFailed, (state) => ({
    ...state,
    paymentLoading: false
  })),
  on(paymentQuery.loadSuccess, (state, {payment}) => ({...state, payment})),

  on(paymentQuery.deleteSuccess, (state, {id}) => ({
    ...state,
    payments: (state.payments || []).filter((login) => login.id != id)
  })),
  on(paymentQuery.updateSuccess, (state, {payment}) => ({
    ...state,
    payments: (state.payments || []).map((l) => (l.id == payment.id ? payment : l))
  })),

  // USERS
  on(userQuery.register, userQuery.login, userQuery.load, (state) => ({
    ...state,
    userLoading: true
  })),
  on(
    userQuery.loginSuccess,
    userQuery.loginFailed,
    userQuery.registerSuccess,
    userQuery.registerFailed,
    userQuery.loadSuccess,
    userQuery.loadFailed,
    (state) => ({
      ...state,
      userLoading: false
    })
  ),
  on(userQuery.loadSuccess, userQuery.loginSuccess, (state, {user}) => ({
    ...state,
    user
  })),
  on(userQuery.logoutSuccess, (state) => ({...state, user: undefined})),

  // SECURED NOTES
  on(securedNotesQuery.loadAll, (state) => ({...state, secured_notes_loading: true})),
  on(securedNotesQuery.loadAllSuccess, securedNotesQuery.loadFailed, (state) => ({
    ...state,
    secured_notes_loading: false
  })),
  on(securedNotesQuery.loadAllSuccess, (state, {secured_notes}) => ({
    ...state,
    secured_notes
  })),

  on(securedNotesQuery.load, (state) => ({
    ...state,
    secured_note_loading: true,
    secured_note: undefined
  })),
  on(securedNotesQuery.loadSuccess, securedNotesQuery.loadFailed, (state) => ({
    ...state,
    secured_note_loading: false
  })),
  on(securedNotesQuery.loadSuccess, (state, {secured_note}) => ({...state, secured_note})),
  on(securedNotesQuery.deleteSuccess, (state, {id}) => ({
    ...state,
    secured_notes: (state.secured_notes || []).filter((login) => login.id != id)
  })),
  on(securedNotesQuery.updateSuccess, (state, {secured_note}) => ({
    ...state,
    secured_note: undefined,
    secured_notes: (state.secured_notes || []).map((l) => (l.id == secured_note.id ? secured_note : l))
  })),

  on(securedNotesQuery.createSuccess, (state, {secured_note}) => ({
    ...state,
    secured_notes: [...(state.secured_notes || []), secured_note]
  })),
  on(closeDetails, (state) => ({
    ...state,
    detailsOpen: false
  })),

  // SECURED NOTE ATTACHMENTS
  on(noteAttachmentsQuery.loadAll, (state) => ({...state, note_attachments_loading: true})),
  on(noteAttachmentsQuery.loadAllSuccess, noteAttachmentsQuery.loadAllFailed, (state) => ({
    ...state,
    note_attachments_loading: false
  })),
  on(noteAttachmentsQuery.loadAllSuccess, (state, {note_attachments}) => ({
    ...state,
    note_attachments
  })),
  on(noteAttachmentsQuery.upload, (state) => ({...state, note_attachments_loading: true})),
  on(noteAttachmentsQuery.uploadFailed, noteAttachmentsQuery.uploadSuccess, (state) => ({
    ...state,
    note_attachments_loading: false
  })),
  on(noteAttachmentsQuery.uploadSuccess, (state, {note_attachment}) => ({
    ...state,
    note_attachments: [...(state.note_attachments || []), note_attachment]
  }))
);
