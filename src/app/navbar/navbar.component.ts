import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public loggedin = false;
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.loggedin = this.loginService.isLoggedIn();
  }

  logout() {
    this.loginService.logout();
  }

}
