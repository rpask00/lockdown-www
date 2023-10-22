import {createAction, props} from '@ngrx/store';
import {
  Attachment,
  IdType,
  Login,
  LoginDto,
  LoginRequest,
  Payment,
  PaymentDto,
  SecuredNote,
  SecuredNoteDto,
  User,
  UserDto
} from './root.state';

export const loginQuery = {
  loadAll: createAction('[Root Component] load all login'),
  loadAllSuccess: createAction('[Root Component] load all login success', props<{logins: Login[]}>()),
  loadAllFailed: createAction('[Root Component] load all login failed'),

  load: createAction('[Root Component] load login', props<{id: IdType}>()),
  loadSuccess: createAction('[Root Component] load login success', props<{login?: Login}>()),
  loadFailed: createAction('[Root Component] load login failed'),

  create: createAction('[Root Component] create login', props<{login: LoginDto}>()),
  createSuccess: createAction('[Root Component] create login success', props<{login: Login}>()),
  createFailed: createAction('[Root Component] create login failed'),

  update: createAction('[Root Component] update login', props<{id: IdType; login: LoginDto}>()),
  updateSuccess: createAction('[Root Component] update login success', props<{login: Login}>()),
  updateFailed: createAction('[Root Component] update login failed'),

  delete: createAction('[Root Component] delete login', props<{id: IdType}>()),
  deleteSuccess: createAction('[Root Component] delete login success', props<{id: IdType}>()),
  deleteFailed: createAction('[Root Component] delete login failed'),

  deleteMass: createAction('[Root Component] delete mass login', props<{ids: IdType[]}>()),
  deleteMassSuccess: createAction('[Root Component] delete mass login success', props<{ids: Set<IdType>}>()),
  deleteMassFailed: createAction('[Root Component] delete mass login failed')
};

export const paymentQuery = {
  loadAll: createAction('[Root Component] load all payment'),
  loadAllSuccess: createAction('[Root Component] load all payment success', props<{payments: Payment[]}>()),
  loadAllFailed: createAction('[Root Component] load all payment failed'),

  load: createAction('[Root Component] load payment', props<{id: IdType}>()),
  loadSuccess: createAction('[Root Component] load payment success', props<{payment?: Payment}>()),
  loadFailed: createAction('[Root Component] load payment failed'),

  create: createAction('[Root Component] create payment', props<{payment: PaymentDto}>()),
  createSuccess: createAction('[Root Component] create payment success', props<{payment: Payment}>()),
  createFailed: createAction('[Root Component] create payment failed'),

  update: createAction('[Root Component] update payment', props<{id: IdType; payment: PaymentDto}>()),
  updateSuccess: createAction('[Root Component] update payment success', props<{payment: Payment}>()),
  updateFailed: createAction('[Root Component] update payment failed'),

  delete: createAction('[Root Component] delete payment', props<{id: IdType}>()),
  deleteSuccess: createAction('[Root Component] delete payment success', props<{id: IdType}>()),
  deleteFailed: createAction('[Root Component] delete payment failed'),

  deleteMass: createAction('[Root Component] delete mass payment', props<{ids: IdType[]}>()),
  deleteMassSuccess: createAction('[Root Component] delete mass payment success', props<{ids: Set<IdType>}>()),
  deleteMassFailed: createAction('[Root Component] delete mass payment failed')
};

export const securedNotesQuery = {
  loadAll: createAction('[Root Component] load all secured_notes'),
  loadAllSuccess: createAction(
    '[Root Component] load all secured_notes success',
    props<{secured_notes: SecuredNote[]}>()
  ),
  loadAllFailed: createAction('[Root Component] load all secured_notes failed'),

  load: createAction('[Root Component] load secured_notes', props<{id: IdType}>()),
  loadSuccess: createAction('[Root Component] load secured_notes success', props<{secured_note?: SecuredNote}>()),
  loadFailed: createAction('[Root Component] load secured_notes failed'),

  create: createAction('[Root Component] create secured_notes', props<{secured_note: SecuredNoteDto}>()),
  createSuccess: createAction('[Root Component] create secured_notes success', props<{secured_note: SecuredNote}>()),
  createFailed: createAction('[Root Component] create secured_notes failed'),

  update: createAction('[Root Component] update secured_notes', props<{id: IdType; secured_note: SecuredNoteDto}>()),
  updateSuccess: createAction('[Root Component] update secured_notes success', props<{secured_note: SecuredNote}>()),
  updateFailed: createAction('[Root Component] update secured_notes failed'),

  delete: createAction('[Root Component] delete secured_notes', props<{id: IdType}>()),
  deleteSuccess: createAction('[Root Component] delete secured_notes success', props<{id: IdType}>()),
  deleteFailed: createAction('[Root Component] delete secured_notes failed')
};

export const noteAttachmentsQuery = {
  loadAll: createAction('[Root Component] load all note_attachments', props<{note_id: IdType}>()),
  loadAllSuccess: createAction(
    '[Root Component] load all note_attachments success',
    props<{note_attachments: Attachment[]}>()
  ),
  loadAllFailed: createAction('[Root Component] load all note_attachments failed'),

  download: createAction('[Root Component] download note_attachments', props<{id: IdType}>()),
  downloadSuccess: createAction('[Root Component] download note_attachments success'),
  downloadFailed: createAction('[Root Component] download note_attachments failed'),

  upload: createAction('[Root Component] upload note_attachments', props<{note_id: IdType; files: File[]}>()),
  uploadSuccess: createAction('[Root Component] upload note_attachments success', props<{note_attachments: Attachment[]}>()),
  uploadFailed: createAction('[Root Component] upload note_attachments failed'),

  delete: createAction('[Root Component] delete note_attachments', props<{id: IdType}>()),
  deleteSuccess: createAction('[Root Component] delete note_attachments success', props<{id: IdType}>()),
  deleteFailed: createAction('[Root Component] delete note_attachments failed')

};

export const userQuery = {
  load: createAction('[Root Component] load user', props<{id: IdType}>()),
  loadSuccess: createAction('[Root Component] load user success', props<{user: User}>()),
  loadFailed: createAction('[Root Component] load user failed'),

  login: createAction('[Root Component] login user', props<LoginRequest>()),
  loginSuccess: createAction('[Root Component] login user success', props<{user: User}>()),
  loginFailed: createAction('[Root Component] login user failed'),

  register: createAction('[Root Component] register user', props<{user: UserDto}>()),
  registerSuccess: createAction('[Root Component] register user success', props<{user: User}>()),
  registerFailed: createAction('[Root Component] register user failed'),

  logout: createAction('[Root Component] logout user'),
  logoutSuccess: createAction('[Root Component] logout user success'),
  logoutFailed: createAction('[Root Component] logout user failed')
};

export const closeDetails = createAction('[Root Component] close details');
