import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerurl = "http://localhost:3000/api/register"
  private _loginurl = "http://localhost:3000/api/login"

  constructor(private http: HttpClient, private _router: Router) { }

  registerUser(user: any){
   return this.http.post<any>(this._registerurl, user)
  }

  loginUser(user: any){
    return this.http.post<any>(this._loginurl, user)
   }
  
  logoutUser(){
    localStorage.removeItem('token')
    this._router.navigate(['/login'])
  }

  loggedIn(){
    return !!localStorage.getItem('token')  // its gonna return true or false
  }

  getToken(){
    return localStorage.getItem('token')
  }
  
}
