import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './_common/not-found.component';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AppCommonModule } from "./app-common/app-common.module";
import {LoginRoutingModule} from "./login/login-routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppCommonModule,
    LoginRoutingModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
