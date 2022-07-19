import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EventService {

  private _eventsurl = "http://localhost:3000/api/events"
  private _specialeventsurl = "http://localhost:3000/api/special-events"

  constructor(private http: HttpClient) { }

  getEvents(){
   return this.http.get<any>(this._eventsurl)
  }

  getspecialEvents(){
    return this.http.get<any>(this._specialeventsurl)
   }
}
