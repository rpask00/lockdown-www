import {createAction, props} from '@ngrx/store';
import {IdType, Login, LoginDto, LoginRequest, User, UserDto} from "./root.state";

export const loginQuery = {
  loadAll: createAction('[Root Component] load all login'),
  loadAllSuccess: createAction('[Root Component] load all login success', props<{ logins: Login[] }>()),
  loadAllFailed: createAction('[Root Component] load all login failed'),

  load: createAction('[Root Component] load login', props<{ id: IdType }>()),
  loadSuccess: createAction('[Root Component] load login success', props<{ login?: Login  }>()),
  loadFailed: createAction('[Root Component] load login failed'),

  create: createAction('[Root Component] create login', props<{ login: LoginDto }>()),
  createSuccess: createAction('[Root Component] create login success', props<{ login: Login }>()),
  createFailed: createAction('[Root Component] create login failed'),

  update: createAction('[Root Component] update login', props<{ id: IdType, login: LoginDto }>()),
  updateSuccess: createAction('[Root Component] update login success', props<{ login: Login }>()),
  updateFailed: createAction('[Root Component] update login failed'),

  delete: createAction('[Root Component] delete login', props<{ id: IdType }>()),
  deleteSuccess: createAction('[Root Component] delete login success', props<{ id: IdType }>()),
  deleteFailed: createAction('[Root Component] delete login failed'),
}

export const userQuery = {
  load: createAction('[Root Component] load user', props<{ id: IdType }>()),
  loadSuccess: createAction('[Root Component] load user success', props<{ user: User }>()),
  loadFailed: createAction('[Root Component] load user failed'),

  login: createAction('[Root Component] login user', props<LoginRequest>()),
  loginSuccess: createAction('[Root Component] login user success', props<{ user: User }>()),
  loginFailed: createAction('[Root Component] login user failed'),

  register: createAction('[Root Component] register user', props<{ user: UserDto }>()),
  registerSuccess: createAction('[Root Component] register user success', props<{ user: User }>()),
  registerFailed: createAction('[Root Component] register user failed'),

  logout: createAction('[Root Component] logout user'),
  logoutSuccess: createAction('[Root Component] logout user success'),
  logoutFailed: createAction('[Root Component] logout user failed'),

}

export const closeDetails = createAction('[Root Component] close details');

