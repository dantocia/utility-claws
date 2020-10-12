import { Injectable } from '@angular/core';

import {EventTimer} from './event-timer.model';
import {EventTimerLap} from './event-timer-lap.model';
import { Subject } from 'rxjs';


@Injectable({providedIn: 'root'})

export class EventTimerServices {

    eventTimersChanged = new Subject<EventTimer[]>();
    eventTimerLapsChanged = new Subject<EventTimerLap[]>();
    isStopWatch = new Subject<void>();
    

    private eventTimers: EventTimer[] = [
        new EventTimer('Test Name', {hour:1, minute:0o1, second:60}, false),
        new EventTimer('Test n2', {hour:1, minute: 0o5, second:30}, true),
    ];
    private eventTimerLaps: EventTimerLap[] = [
        
    ];

    getTimers(){
        return this.eventTimers.slice();
    }

    addEmptyTimer(){
        this.eventTimers.push(new EventTimer('',{hour:0, minute:0, second:0}, false));
        this.eventTimersChanged.next(this.eventTimers.slice());
    }

    eliminateTimer(index: number){
        this.eventTimers.splice(index,1);
        this.eventTimersChanged.next(this.eventTimers.slice());
    }

    addStopWatch(){
        this.eventTimers.push(new EventTimer('',{hour:0, minute:0, second:0}, true));
        this.isStopWatch.next();
    
        this.eventTimersChanged.next(this.eventTimers.slice());
        

    }
    getLapTimers(){
        return this.eventTimerLaps.slice();
    }

    addNewLap(rLap: EventTimerLap, TID: number){

     
        this.eventTimerLaps.push(
            new EventTimerLap(rLap.name,TID,{hour: rLap.time.hour,minute: rLap.time.minute,second: rLap.time.second})
            );
        this.eventTimerLapsChanged.next(this.eventTimerLaps.slice());
      
    }

    eliminateLaps(){
        this.eventTimerLaps.splice(0,this.eventTimerLaps.length);
        this.eventTimerLapsChanged.next(this.eventTimerLaps.slice());
    }
}