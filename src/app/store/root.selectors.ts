import {createSelector} from "@ngrx/store";
import {AppState} from "../app.module";
import {RootState} from "./root.state";


export const selectRoot = createSelector((state: AppState) => state, (state) => state.root)
export const selectLogin = createSelector(selectRoot, (state: RootState) => state.login);
export const selectLoginLoading = createSelector(selectRoot, (state: RootState) => state.loginLoading || false);
export const userLoading = createSelector(selectRoot, (state: RootState) => state.userLoading || false);


