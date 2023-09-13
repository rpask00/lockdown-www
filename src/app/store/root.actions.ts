import {createAction, props} from '@ngrx/store';
import {IdType, Login, LoginRequest, User, UserDto} from "./root.state";

export const loginQuery = {
  load: createAction('[Root Component] load login', props<{ id: IdType }>()),
  loadSuccess: createAction('[Root Component] load login success', props<{ login: Login }>()),
  loadFailed: createAction('[Root Component] load login failed'),
  showDetails: createAction('[Root Component] show login details'),
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
}

export const closeDetails = createAction('[Root Component] close details');

