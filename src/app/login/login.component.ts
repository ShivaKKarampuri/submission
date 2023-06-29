import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  showText = false;
  loginInfo = {
    email: '',
    pwd: ''
  }
  isUserLoggedIn = true;
  constructor(private router: Router, 
    private aService: AuthService,
    private loginService: LoginService) { }

  ngOnInit() {
    console.log('aService', this.aService.isLoggedIn);
  }

  onLogin() {
   this.loginService.onLogin(this.loginInfo.email, this.loginInfo.pwd)
   .subscribe(v => {
    if (v) {
      this.router.navigate(['/home']);
      this.showText = false;
      return;
    }
    this.showText = true;
   })
  }
}
