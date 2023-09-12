import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {StoreModule} from "@ngrx/store";
import {rootReducer} from "./store/root.reducer";
import {EffectsModule} from "@ngrx/effects";
import {ToastrModule} from "ngx-toastr";
import {RootEffects} from "./store/root.effects";
import {LoginsListComponent} from './logins-list/logins-list.component';
import {LoginComponent} from './logins-list/login/login.component';
import {MatChipsModule} from "@angular/material/chips";
import {MatMenuModule} from "@angular/material/menu";
import {ClickStopPropagationDirective} from "./directives/click-stop-propagation.directive";
import {ClickPreventDefaultDirective} from "./directives/click-prevent-default.directive";
import {LoginDetailsComponent} from './logins-list/login-details/login-details.component';
import {RootState} from "./store/root.state";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {LoaderTransparentComponent} from "./components/loader-transparent/loader-transparent.component";
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";

export interface AppState {
  root: RootState
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
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    StoreModule.forRoot({root: rootReducer}, {}),
    EffectsModule.forRoot([RootEffects]),
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatChipsModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
