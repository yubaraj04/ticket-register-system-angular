import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: LoginService) { }

  ngOnInit(): void {
  }

  credentials = {
    email: "",
    password: ""
  }

  onSubmit() {
    if ((this.credentials.email != '' && this.credentials.password != '') && (this.credentials.email != null && this.credentials.password != null)) {
      this.service.doLogin(this.credentials.email, this.credentials.password).subscribe(
        (response: any) => {
          this.service.loginUser(response.accessToken);
          window.location.href = "/dashboard";
        },
        error => {
          console.log(error);
        }
      )
    } else {
      console.log("Invalid Input.");
    }
  }
}
