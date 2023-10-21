import {createSelector} from '@ngrx/store';
import {AppState} from '../app.module';
import {IdType, RootState} from './root.state';

export const selectRoot = createSelector(
  (state: AppState) => state,
  (state) => state.root
);
export const userLoading = createSelector(selectRoot, (state: RootState) => state.userLoading || false);

// LOGIN
export const selectLogin = createSelector(selectRoot, (state: RootState) => state.login);
export const selectLoginLoading = createSelector(selectRoot, (state: RootState) => state.loginLoading || false);
export const selectLogins = createSelector(selectRoot, (state: RootState) => state.logins || []);
export const selectLoginsLoading = createSelector(selectRoot, (state: RootState) => state?.loginsLoading || false);

// PAYMENT
export const selectPayment = createSelector(selectRoot, (state: RootState) => state.payment);
export const selectPaymentLoading = createSelector(selectRoot, (state: RootState) => state.paymentLoading || false);

export const selectPayments = createSelector(selectRoot, (state: RootState) => state.payments || []);
export const selectPaymentsLoading = createSelector(selectRoot, (state: RootState) => state?.paymentsLoading || false);

// SECURED NOTE
export const selectSecuredNote = createSelector(selectRoot, (state: RootState) => state.secured_note);
export const selectSecuredNoteLoading = createSelector(
  selectRoot,
  (state: RootState) => state.secured_note_loading || state.note_attachments_loading || false
);
export const selectSecuredNotes = createSelector(selectRoot, (state: RootState) => state.secured_notes || []);
export const selectSecuredNotesLoading = createSelector(
  selectRoot,
  (state: RootState) => state.secured_notes_loading || false
);

// NOTE ATTACHMENTS

export const selectNoteAttachments = createSelector(selectRoot, (state: RootState) => state.note_attachments || []);
export const selectNoteAttachment = (id: IdType) =>
  createSelector(selectRoot, (state: RootState) => state.note_attachments?.find((n) => n.id == id) || null);
