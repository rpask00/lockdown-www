import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginsListComponent} from "./logins-list/logins-list.component";
import {LoginDetailsComponent} from "./logins-list/login-details/login-details.component";
import {AuthComponent} from "./auth/auth.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'logins',
        component: LoginsListComponent,
      },
      {
        path: 'login/edit/:id',
        component: LoginDetailsComponent,
        outlet: 'details',
      },
      {
        path: 'login/new',
        component: LoginDetailsComponent,
        outlet: 'details',
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
