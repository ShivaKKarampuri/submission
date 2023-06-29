import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private aService: AuthService) { }

  onLogin(username: string, pwd: string) {
    if (username === 'k' &&
      pwd === '200') {
      this.aService.isLoggedIn = true;
    } else {
      this.aService.isLoggedIn = false;
    }
    return of(this.aService.isLoggedIn);
  }
}
