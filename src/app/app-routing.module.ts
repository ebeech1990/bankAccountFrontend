import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountListComponent } from './components/account-list/account-list.component';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { AddAccountComponent } from './components/add-account/add-account.component';



const routes: Routes = [
  { path: '', redirectTo: 'accounts', pathMatch: 'full' },
  { path: 'accounts', component: AccountListComponent },
  { path: 'accounts/:id', component: AccountDetailsComponent },
  { path: 'add', component: AddAccountComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
