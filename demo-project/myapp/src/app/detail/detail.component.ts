import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Output() text = new EventEmitter
  constructor() { }

  ngOnInit(): void {
    fromEvent(document, "click").subscribe(() => console.log('Clicked!'));
  }

  message(){
    this.text.emit();
  }
}
