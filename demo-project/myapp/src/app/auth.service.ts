import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerurl = "http://localhost:3000/api/register"
  private _loginurl = "http://localhost:3000/api/login"

  constructor(private http: HttpClient) { }

  registerUser(user: any){
   return this.http.post<any>(this._registerurl, user)
  }

  loginrUser(user: any){
    return this.http.post<any>(this._loginurl, user)
   }
}
