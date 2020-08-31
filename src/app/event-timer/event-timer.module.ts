import {NgModule} from '@angular/core';
import { SharedModule } from '../shared/shared.module';


import { EventTimerRoutingModule } from './event-timer-routing.module';
import { EventTimerComponent } from './event-timer.component';
import { EventTimerListComponent } from './event-timer-list/event-timer-list.component';
import { EventTimerItemComponent } from './event-timer-list/event-timer-item/event-timer-item.component';
import { EventTimerEditComponent } from './event-timer-edit/event-timer-edit.component';





@NgModule({
	declarations: [
        EventTimerComponent,
        EventTimerListComponent,
        EventTimerItemComponent,
        EventTimerEditComponent

	],
	imports: [SharedModule,EventTimerRoutingModule],
	
})

export class EventTimerModule {

}