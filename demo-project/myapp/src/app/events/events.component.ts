import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events = <any>[]
  constructor(private _eventService: EventService) { }

  ngOnInit(): void {
    this._eventService.getEvents()
    .subscribe(
      res => this.events = res,
      err => console.log(err)
    )
  }

  message(){
    alert("Course is added to cart!");
  }

  textalert(){
    alert("Please login to subscribe the special events! ")
  }
}
