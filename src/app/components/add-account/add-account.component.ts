import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {

  account = {
    nickname: '',
    balance: '',
    status: false
  };
  submitted = false;


  constructor(private accountService: AccountService) {}


  ngOnInit(){}

  saveAccount() {
    const data = {
      nickname: this.account.nickname,
      balance: this.account.balance
    };

    this.accountService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newAccount() {
    this.submitted = false;
    this.account = {
      nickname: '',
      balance: '',
      status: false
    };
  }


}
