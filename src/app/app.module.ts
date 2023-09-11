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

@NgModule({
  declarations: [
    AppComponent
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
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
