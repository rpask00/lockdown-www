import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {StoreModule} from '@ngrx/store';
import {rootReducer} from './store/root.reducer';
import {EffectsModule} from '@ngrx/effects';
import {ToastrModule} from 'ngx-toastr';
import {RootEffects} from './store/root.effects';
import {LoginsListComponent} from './logins-list/logins-list.component';
import {LoginComponent} from './logins-list/login/login.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatMenuModule} from '@angular/material/menu';
import {ClickStopPropagationDirective} from './directives/click-stop-propagation.directive';
import {ClickPreventDefaultDirective} from './directives/click-prevent-default.directive';
import {LoginDetailsComponent} from './logins-list/login-details/login-details.component';
import {RootState} from './store/root.state';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {LoaderTransparentComponent} from './components/loader-transparent/loader-transparent.component';
import {AuthComponent} from './auth/auth.component';
import {HomeComponent} from './home/home.component';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MatTooltipModule} from '@angular/material/tooltip';
import {AuthInterceptor} from './interceptors/auth.interceptor';
import {MAT_DATE_LOCALE} from '@angular/material/core';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {NgOptimizedImage} from '@angular/common';
import {PaymentsListComponent} from './payments-list/payments-list.component';
import {PaymentDetailsComponent} from './payments-list/payment-details/payment-details.component';
import {PaymentComponent} from './payments-list/payment/payment.component';
import {MatSelectModule} from '@angular/material/select';
import {CreditCardDirectivesModule} from 'angular-cc-library';
import {SecuredNotesListComponent} from './secured-notes-list/secured-notes-list.component';
import {SecuredNoteComponent} from './secured-notes-list/secured-note/secured-note.component';
import {SecuredNoteDetailsComponent} from './secured-notes-list/secured-note-details/secured-note-details.component';
import {TableDateComponent} from './components/table-date/table-date.component';
import {AttachmentsPipe} from './pipes/attachments.pipe';

export interface AppState {
  root: RootState;
}

@NgModule({
  declarations: [
    AppComponent,
    LoginsListComponent,
    LoginComponent,
    ClickStopPropagationDirective,
    ClickPreventDefaultDirective,
    LoginDetailsComponent,
    LoaderTransparentComponent,
    AuthComponent,
    HomeComponent,
    PaymentsListComponent,
    PaymentComponent,
    PaymentDetailsComponent,
    SecuredNotesListComponent,
    SecuredNoteComponent,
    SecuredNoteDetailsComponent,
    TableDateComponent,
    AttachmentsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    StoreModule.forRoot({root: rootReducer}, {}),
    EffectsModule.forRoot([RootEffects]),
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    }),
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatChipsModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTooltipModule,
    ClipboardModule,
    NgOptimizedImage,
    MatSelectModule,
    CreditCardDirectivesModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {provide: MAT_DATE_LOCALE, useValue: 'pl'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
