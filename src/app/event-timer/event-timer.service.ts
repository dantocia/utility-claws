import { Injectable } from '@angular/core';

import {EventTimer} from './event-timer.model';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})

export class EventTimerServices {

    eventTimersChanged = new Subject<EventTimer[]>();
    

    private eventTimers: EventTimer[] = [
        new EventTimer('Test Name', {hour:1, minute:0o1, second:60}),
        new EventTimer('Test n2', {hour:1, minute: 0o5, second:30}),
    ];

    getTimers(){
        return this.eventTimers.slice();
    }

    addEmptyTimer(){
        this.eventTimers.push(new EventTimer('',{hour:0, minute:0, second:0}));
        this.eventTimersChanged.next(this.eventTimers.slice());
    }

    eliminateTimer(index: number){
        this.eventTimers.splice(index,1);
        this.eventTimersChanged.next(this.eventTimers.slice());
    }
}