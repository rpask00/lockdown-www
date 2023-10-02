import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginsListComponent} from './logins-list/logins-list.component';
import {LoginDetailsComponent} from './logins-list/login-details/login-details.component';
import {AuthComponent} from './auth/auth.component';
import {HomeComponent} from './home/home.component';
import {PaymentsListComponent} from './payments-list/payments-list.component';
import {PaymentDetailsComponent} from './payments-list/payment-details/payment-details.component';
import {SecuredNotesListComponent} from './secured-notes-list/secured-notes-list.component';
import {SecuredNoteDetailsComponent} from './secured-notes-list/secured-note-details/secured-note-details.component';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'logins',
        component: LoginsListComponent
      },
      {
        path: 'login/edit/:id',
        component: LoginDetailsComponent,
        outlet: 'details'
      },
      {
        path: 'login/new',
        component: LoginDetailsComponent,
        outlet: 'details'
      },
      {
        path: 'payments',
        component: PaymentsListComponent
      },
      {
        path: 'payment/edit/:id',
        component: PaymentDetailsComponent,
        outlet: 'details'
      },
      {
        path: 'payment/new',
        component: PaymentDetailsComponent,
        outlet: 'details'
      },
      {
        path: 'secured-notes',
        component: SecuredNotesListComponent
      },
      {
        path: 'secured-note/edit/:id',
        component: SecuredNoteDetailsComponent,
        outlet: 'details'
      },
      {
        path: 'secured-note/new',
        component: SecuredNoteDetailsComponent,
        outlet: 'details'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
