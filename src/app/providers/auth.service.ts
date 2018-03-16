import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  
  isLoggedIn = false

  constructor() { }

  login() {
    this.isLoggedIn = true
  }

  logout() {
    this.isLoggedIn = false
  }

}
