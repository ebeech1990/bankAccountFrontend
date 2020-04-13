import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {

  currentAccount = null;
  message = '';

  constructor(
    private accountService: AccountService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(){
    this.message = '';
    this.getAccount(this.route.snapshot.paramMap.get('id'));
  }

  getAccount(id) {
    this.accountService.get(id)
      .subscribe(
        data => {
          this.currentAccount = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateStatus(status) {
    const data = {
      nickname: this.currentAccount.nickname,
      balance: this.currentAccount.balance,
      status: status
    };

    this.accountService.update(this.currentAccount.id, data)
      .subscribe(
        response => {
          this.currentAccount.status = status;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  updateAccount() {
    this.accountService.update(this.currentAccount.id, this.currentAccount)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The account was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteAccount() {
    this.accountService.delete(this.currentAccount.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/accounts']);
        },
        error => {
          console.log(error);
        });
  }

}
