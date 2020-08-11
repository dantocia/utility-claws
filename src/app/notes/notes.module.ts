import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import { NotesComponent } from './notes.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NotesItemComponent } from './notes-list/notes-item/notes-item.component';
import { NotesEditComponent } from './notes-edit/notes-edit.component';
import { NotesRoutingModule } from './notes-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
	declarations: [
	NotesComponent,
    NotesListComponent,
    NotesItemComponent,
    NotesEditComponent,
    


	],
	imports: [RouterModule, ReactiveFormsModule,NotesRoutingModule, CommonModule,NgbModule],
	
})

export class NotesModule {

}