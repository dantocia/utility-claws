import { Component, OnInit, OnDestroy } from '@angular/core';
import { EventTimer } from '../event-timer.model';
import { EventTimerServices } from '../event-timer.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-event-timer-list',
  templateUrl: './event-timer-list.component.html',
  styleUrls: ['./event-timer-list.component.css']
})
export class EventTimerListComponent implements OnInit, OnDestroy {

  eventTimers: EventTimer[];
  subscription: Subscription;

  
  
  constructor(private eventTimerServices: EventTimerServices) { }

  ngOnInit() {
    this.subscription = this.eventTimerServices.eventTimersChanged
    .subscribe(
      (eventTimers: EventTimer[]) =>{
        this.eventTimers = eventTimers;
        
      }
    );
    this.eventTimers = this.eventTimerServices.getTimers();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
