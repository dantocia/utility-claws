import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { EventTimerComponent } from './event-timer.component';
import { EventTimerListComponent } from './event-timer-list/event-timer-list.component';
import { EventTimerEditComponent } from './event-timer-edit/event-timer-edit.component';



const routes: Routes = [
    {path: '', component: EventTimerComponent, children: [
        {path: '', component: EventTimerListComponent},
        {path:'new', component: EventTimerEditComponent },
        {path: ':id/edit', component: EventTimerEditComponent}
    ]}


];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]

})

export class EventTimerRoutingModule{}