import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public list = <any>[];

  constructor(private _eventService: EventService) { }

  ngOnInit(): void {
    this._eventService.getEmployees()
    .subscribe(
      res => this.list = res,
      err => console.log(err)
    )
  }
}
