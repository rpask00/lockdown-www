import {createAction, props} from '@ngrx/store';
import {IdType, Login} from "./root.state";

export const loginQuery = {
  load: createAction('[Root Component] load login', props<{ id: IdType }>()),
  loadSuccess: createAction('[Root Component] load login success', props<{ login: Login }>()),
  loadFailed: createAction('[Root Component] load login failed'),
  showDetails: createAction('[Root Component] show login details'),
}


export  const closeDetails = createAction('[Root Component] close details');

