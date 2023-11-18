import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginsListComponent} from './components/logins-list/logins-list.component';
import {LoginDetailsComponent} from './components/logins-list/login-details/login-details.component';
import {AuthComponent} from './components/auth/auth.component';
import {HomeComponent} from './components/home/home.component';
import {PaymentsListComponent} from './components/payments-list/payments-list.component';
import {PaymentDetailsComponent} from './components/payments-list/payment-details/payment-details.component';
import {SecuredNotesListComponent} from './components/secured-notes-list/secured-notes-list.component';
import {
  SecuredNoteDetailsComponent
} from './components/secured-notes-list/secured-note-details/secured-note-details.component';
import {isAuthenticatedGuard} from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [isAuthenticatedGuard],
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
      },
      {
        path: '**',
        redirectTo: 'logins',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
