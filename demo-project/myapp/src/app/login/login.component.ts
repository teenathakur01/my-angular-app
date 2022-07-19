import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

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

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  loginUser(){
    //console.log(this.loginUserData)
    this.auth.registerUser(this.loginUserData)
    .subscribe(
      res => console.log(res),
      err => console.error(err)
      
    )
  }

}
