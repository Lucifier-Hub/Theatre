import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginInput: string;
  passwordInput: string;
  loginData: string;
  passwordData: string;
  constructor() {}

  onLogin() {
    this.loginData = this.loginInput;
    this.passwordData = this.passwordInput;
    this.loginInput = '';
    this.passwordInput = '';
    if (this.loginData === 'user' && this.passwordData === 'password') {
      alert('Authentication Successful!!');
    } else {
      alert('Authentication Failed');
    }
  }

  // onColor() {
  //   document.querySelector('body').className = 'bg-dark';
  //   if (document.querySelector('body').className === 'bg-light') {
  //     document.querySelector('body').className = 'bg-dark';
  //   } else if (document.querySelector('body').className === 'bg-dark') {
  //     document.querySelector('body').className = 'bg-light';
  //   }
  // }

  // blue() {
  //   document.querySelector('body').className = 'bg-primary';
  // }

  // green() {
  //   document.querySelector('body').className = 'bg-success';
  // }

  // yellow() {
  //   document.querySelector('body').className = 'bg-warning';
  // }

  onColor(colour) {
    return colour();
  }

  blue() {
    document.querySelector('body').className = 'bg-primary';
  }

  green() {
    document.querySelector('body').className = 'bg-success';
  }

  yellow() {
    document.querySelector('body').className = 'bg-warning';
  }

  dark() {
    document.querySelector('body').className = 'bg-dark';
  }

  ngOnInit(): void {}
}
