import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAccountComponent } from './components/add-account/add-account.component';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { AccountListComponent } from './components/account-list/account-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAccountComponent,
    AccountDetailsComponent,
    AccountListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
