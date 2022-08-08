import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Output() text = new EventEmitter
  constructor() { }

  ngOnInit(): void {
  }

  message(){
    this.text.emit();
  }
}
