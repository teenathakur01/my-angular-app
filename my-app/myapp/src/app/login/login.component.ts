import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData ={
    email :'',
    password:''
  }

  constructor(private auth: AuthService,
              private _router: Router) { }

  ngOnInit(): void {
  }

  loginUser(){
    //console.log(this.loginUserData)
    this.auth.registerUser(this.loginUserData)
    .subscribe(
      res => {
        console.log(res)
        localStorage.setItem('token',res.token)
        this._router.navigate(['/special-events'])
      },
      err => console.error(err)
      
    )
  }

}
