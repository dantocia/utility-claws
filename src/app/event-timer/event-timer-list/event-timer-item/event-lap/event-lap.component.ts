import { Component, Input, OnInit } from '@angular/core';
import { EventTimerLap } from 'src/app/event-timer/event-timer-lap.model';
import { EventTimerServices } from 'src/app/event-timer/event-timer.service';


@Component({
  selector: 'app-event-lap',
  templateUrl: './event-lap.component.html',
  styleUrls: ['./event-lap.component.css']
})
export class EventLapComponent implements OnInit {

  constructor(private evenTimerService: EventTimerServices) { }

  @Input() eventLapTimers: EventTimerLap;

  @Input() index: number;

  

  
 



  ngOnInit() {
  }
  
}
