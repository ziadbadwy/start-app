import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PasswordModule } from 'primeng/password';
import { logData } from '../logData';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  httpCalling = false;
  email?:string;
  password1?:string;
  //declare  data : logData;
   data={
    "email":this.email,
    "password":this.password1

  };
  url="https://coffee-eg.herokuapp.com/api/login";

  constructor(private _login: LoginService, private _router: Router ,private _http:HttpClient) { }

  ngOnInit(): void {
  }
  handleLogin() {
    this.httpCalling = true;
    this._http.post(this.url,this.data).subscribe((resp:any)=>{
        if(resp.email){
          this._login.logMe(resp.email);
          this._router.navigate(['home'])
        }else{
          alert(resp.error)
          this.httpCalling = false;

        }
    },error=>{
      alert(error.message)
      this.httpCalling = false;

    }
    );
  }
}
