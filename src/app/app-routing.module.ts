import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginsListComponent} from "./logins-list/logins-list.component";

const routes: Routes = [{
  path: 'logins',
  component: LoginsListComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
