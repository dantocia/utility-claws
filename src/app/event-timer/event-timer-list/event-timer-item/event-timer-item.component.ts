import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import {FormGroup, FormControl, FormArray, Validators} from '@angular/forms';

import {NgbTimepickerConfig} from '@ng-bootstrap/ng-bootstrap';
import {NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';
import { EventTimer } from '../../event-timer.model';
import { EventTimerServices } from '../../event-timer.service';
import { timer } from 'rxjs';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-event-timer-item',
  templateUrl: './event-timer-item.component.html',
  styleUrls: ['./event-timer-item.component.css'],
  providers: [NgbTimepickerConfig]
})
export class EventTimerItemComponent implements OnInit {

  time: NgbTimeStruct = {hour: 0, minute: 0, second: 0};
  name: string;
  subscription: Subscription;

  playing = false;

  @Input() eventTimers: EventTimer;

  @Input() index: number;

  constructor(private eventTimerService: EventTimerServices, config: NgbTimepickerConfig) { config.seconds = true;
    config.spinners = true;}

  ngOnInit() {
    
  }

  eventTimerForm = new FormGroup({
    name: new FormControl(),
    time: new FormControl(this.time, Validators.required)
  });

  onSubmit(eventTimer: EventTimer){
    this.playing = true;
    console.log('on Submit recibido name: '+eventTimer.name);
    console.log('on Submit original time: '+this.time.hour+':'+this.time.minute+':'+this.time.second);
    console.log('on Submit recibido time: '+eventTimer.time.hour+':'+eventTimer.time.minute+':'+eventTimer.time.second);
    this.name = eventTimer.name;
    
    
   

    
    console.log('on Submit convertido: '+this.time.hour+':'+this.time.minute+':'+this.time.second);

    const source = timer(1000, 1000);
    this.subscription = source.subscribe( val => {
      if(eventTimer.time.second > 0) {
        
        eventTimer.time.second--;
        this.time.second = eventTimer.time.second;
        this.time.minute = eventTimer.time.minute;
        this.time.hour = eventTimer.time.hour;
        
      }
        if(eventTimer.time.second == 0 && eventTimer.time.minute > 0 && eventTimer.time.hour >= 0){
          
          
          eventTimer.time.second = 59;
          eventTimer.time.minute--;
          this.time.minute = eventTimer.time.minute;
        }
          if(eventTimer.time.minute == 0 && eventTimer.time.hour > 0){
           
            
            eventTimer.time.minute = 59;
            eventTimer.time.hour--;
            this.time.hour = eventTimer.time.hour;
          
        
      } 
     
    });

  }
  onPause(){
    console.log('on Pause');
    this.playing = !this.playing;
    this.subscription.unsubscribe();
    
    
    console.log('Paused');
  }
  onReset(){
    console.log('on Reset');
    this.eventTimerForm.reset();
    this.subscription.unsubscribe();
    this.playing = false;
   
  }
  onEliminate(){
    
    this.eventTimerService.eliminateTimer(this.index);

    
    
    
  }
  


}
