import { Component, OnInit } from '@angular/core';
import { EventTimerServices } from './event-timer.service';

@Component({
  selector: 'app-event-timer',
  templateUrl: './event-timer.component.html',
  styleUrls: ['./event-timer.component.css']
})
export class EventTimerComponent implements OnInit {

  constructor(private eventTimerServices: EventTimerServices) { }

  ngOnInit() {
  }
  newEmtyTimer(){
    this.eventTimerServices.addEmptyTimer();

  }
  newStopWatch(){
    this.eventTimerServices.addStopWatch();
  }
}
