import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiFunctionService } from './api-function.service';
import { logData } from './logData';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends ApiFunctionService<logData> {
  isLogin: boolean = false;
  fullName: string = '';
  constructor(http: HttpClient) {
    super("https://coffee-eg.herokuapp.com/api/login", http)
    if (localStorage.getItem('fsfdsg') == 'sdgdg') {
      this.isLogin = true;
      this.fullName = localStorage.getItem('fullName') || '';

    }
  }
  logMe(fullName: string) {
    this.isLogin = true;
    this.fullName = fullName;
    localStorage.setItem('fsfdsg', 'sdgdg');
    localStorage.setItem('fullName', fullName)
  }
  logOut() {
    this.isLogin = false;
    this.fullName = '';
    localStorage.clear();

  }
}
