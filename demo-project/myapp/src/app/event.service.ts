import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EventService {

  private _eventsurl = "http://localhost:3000/api/events"
  private _specialeventsurl = "http://localhost:3000/api/special-events"
  private _employeelisturl = "http://localhost:3000/api/employee-list"

  constructor(private http: HttpClient) { }

  getEvents(){
   return this.http.get<any>(this._eventsurl)
  }

  getspecialEvents(){
    return this.http.get<any>(this._specialeventsurl)
   }

   getEmployees(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._employeelisturl)
  }
}
