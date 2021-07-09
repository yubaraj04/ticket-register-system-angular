import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = "http://localhost:5050";
  constructor(private http: HttpClient) { }

  doLogin(email: string, password: string) {
    return this.http.post(`${this.url}/api/auth/signin`, { "email": email, "password": password })
  }

  // for Login user
  loginUser(token: any) {
    localStorage.setItem("token", token);
    return true;
  }

  isLoggedIn() {
    let token = localStorage.getItem("token");
    if (token == '' || token == undefined || token == null) {
      return false;
    }
    else {
      return true;
    }
  }

  logout() {
    localStorage.removeItem("token");
    location.reload();
  }

  getToken() {
    return localStorage.getItem("token");
  }
}
