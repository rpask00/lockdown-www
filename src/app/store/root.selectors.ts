import {createSelector} from "@ngrx/store";
import {AppState} from "../app.module";
import {RootState} from "./root.state";


export const selectRoot = createSelector((state: AppState) => state, (state) => state.root)
export const selectDetailsOpen = createSelector(selectRoot, (state: RootState) => state.detailsOpen || false);
