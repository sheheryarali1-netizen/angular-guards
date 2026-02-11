import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isLoggedIn = false;

  public toggleLoggedIn() {
    this.isLoggedIn = !this.isLoggedIn;
  }
}
