import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { fromEvent, scan } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Output() text = new EventEmitter
  constructor() { }

  ngOnInit(): void {
    fromEvent(document, "click").pipe(scan((count) => count + 1, 0))
    .subscribe((count) => console.log(`Clicked ${count} times`));
  }

  message(){
    this.text.emit();
  }
}