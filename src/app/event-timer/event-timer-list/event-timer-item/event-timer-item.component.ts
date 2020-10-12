import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import {FormGroup, FormControl, FormArray, Validators} from '@angular/forms';

import {NgbTimepickerConfig} from '@ng-bootstrap/ng-bootstrap';
import {NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';
import { EventTimer } from '../../event-timer.model';
import { EventTimerServices } from '../../event-timer.service';
import { timer } from 'rxjs';
import { Subscription } from 'rxjs';
import { EventTimerLap } from '../../event-timer-lap.model';


@Component({
  selector: 'app-event-timer-item',
  templateUrl: './event-timer-item.component.html',
  styleUrls: ['./event-timer-item.component.css'],
  providers: [NgbTimepickerConfig]
})
export class EventTimerItemComponent implements OnInit, OnDestroy {

  time: NgbTimeStruct = {hour: 0, minute: 0, second: 0};
  name: string;
  subscription: Subscription;
  lapSubscription: Subscription;
  

  playing = false;
  timerEnd = false;
  LappMode = false;


  eventLapTimers: EventTimerLap[];

  @Input() eventTimers: EventTimer;

  @Input() index: number;

  constructor(private eventTimerServices: EventTimerServices, config: NgbTimepickerConfig) { 
    config.seconds = true;
    config.spinners = true;
    
  }
  

  ngOnInit() {
    this.lapSubscription = this.eventTimerServices.eventTimerLapsChanged
    .subscribe(
      (eventTimerLap: EventTimerLap[]) =>{
        this.eventLapTimers = eventTimerLap;
        
      }
    );
    
  
  }
  ngOnDestroy(){
    this.lapSubscription.unsubscribe();
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

    

    const source = timer(1000, 1000);
    this.subscription = source.subscribe(  () => {
      
      
      
      if(this.eventTimers.stopW){
        
        console.log('StopWatchOn'+this.eventTimers.stopW);
        
        
          
          this.time.second = eventTimer.time.second;
          this.time.minute = eventTimer.time.minute;
          this.time.hour = eventTimer.time.hour;
          eventTimer.time.second++;
          this.time.second = eventTimer.time.second;

          if(eventTimer.time.second == 60 ){
            
            
            eventTimer.time.second = 0;
            eventTimer.time.minute++;
            this.time.second = eventTimer.time.second;
            this.time.minute = eventTimer.time.minute;
          }
            if(eventTimer.time.minute == 60 ){
             
              
              eventTimer.time.minute = 0;
              eventTimer.time.hour++;
              this.time.minute = eventTimer.time.minute;
              this.time.hour = eventTimer.time.hour;
            
          
          } 
          
          
          
          
          
        
      }else{
        console.log('StopWatchOn'+this.eventTimers.stopW);
          this.time.second = eventTimer.time.second;
          this.time.minute = eventTimer.time.minute;
          this.time.hour = eventTimer.time.hour;
        if(eventTimer.time.second > 0) {
        
          eventTimer.time.second--;
          this.time.second = eventTimer.time.second;
          
          
          }
          if(eventTimer.time.second == 0 && eventTimer.time.minute > 0 && eventTimer.time.hour >= 0){
            
            
            eventTimer.time.second = 59;
            eventTimer.time.minute--;
            this.time.second = eventTimer.time.second;
            this.time.minute = eventTimer.time.minute;
          }

            if(eventTimer.time.minute == 0 && eventTimer.time.hour > 0){
              
              
              eventTimer.time.minute = 60;
              
              eventTimer.time.hour--;
              this.time.hour = eventTimer.time.hour;
              
              this.time.minute = eventTimer.time.minute;
            
          
          } 
          if(eventTimer.time.minute == 60 && eventTimer.time.second > 0 ){
            eventTimer.time.minute = 0;
            eventTimer.time.hour++;
            
          this.time.minute = eventTimer.time.minute;
          this.time.hour = eventTimer.time.hour;
          }
          if(eventTimer.time.second == 0 && eventTimer.time.minute ==0 && eventTimer.time.hour == 0){
            if(this.subscription){
              this.subscription.unsubscribe();
              this.timerEnd = true;
            }

          }

      }
        
      
      
     
    });

  }
  onPause(){
    console.log('on Pause');
    this.playing = !this.playing;
    if(this.subscription){
      this.subscription.unsubscribe();
    }
    if(this.timerEnd){
      this.timerEnd = false;
    }
  
  }
  onReset(){
    console.log('on Reset');
    
    if(this.subscription){
      this.subscription.unsubscribe();
    }
    if(this.timerEnd){
      this.timerEnd = false;
    }
    this.eventTimerForm.setValue({name: '',time: {hour:0,minute:0,second:0}});
    this.name = '';
    this.time.second = 0;
    this.time.minute = 0;
    this.time.hour = 0;
    
    this.playing = false;
    this.eventTimers.stopW = false;
    if(this.LappMode){
      this.eventTimerServices.eliminateLaps();
      this.LappMode = false
      
    }
  }
  onEliminate(){
    
    this.eventTimerServices.eliminateTimer(this.index);

  }
  turnStopMode(){
    console.log('on turnStopmode');
    if(this.subscription){
      this.subscription.unsubscribe();
    }

   
    if(!this.playing){
      this.eventTimers.stopW = !this.eventTimers.stopW;
    }
    if(this.playing){
      this.playing = false;
      this.eventTimers.stopW = !this.eventTimers.stopW;
    }
    if(this.timerEnd){
      this.timerEnd = false;
    }
  
    
    this.eventTimerForm.setValue({name: '',time: {hour:0,minute:0,second:0}});
    this.time.second = 0;
    this.time.minute = 0;
    this.time.hour = 0;
   
  }
  OnAddLap(lapTime: EventTimerLap){
    
    
    
    if(this.LappMode){
      this.eventTimerServices.addNewLap(lapTime,this.index);
  }else{
  this.LappMode = true;
    this.eventTimerServices.addNewLap(lapTime,this.index);
  }
  
  }

}
