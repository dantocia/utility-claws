import {Component} from '@angular/core';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-datepicker-popup',
  templateUrl: './datepicker-popup.component.html'
})
export class NgbdDatepickerPopup {

  constructor(private calendar: NgbCalendar){}
  date: {day: number, year: number, month: number};
  model: NgbDateStruct;
}