import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit {

  specialevents=<any>[]
  userloggedIn = true

  constructor(private _eventService: EventService,
              private router: Router) { }

  ngOnInit(): void {
    this._eventService.getspecialEvents().subscribe(
      res => this.specialevents = res,
      err => {
        if(err instanceof HttpErrorResponse){
          if(err.status === 401){
              this.router.navigate(['/login'])
          }
        }
      }
    )
  }

  message(){
    alert("Course is added to cart!");
  }

}
