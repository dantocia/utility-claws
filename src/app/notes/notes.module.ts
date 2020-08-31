import {NgModule} from '@angular/core';


import { NotesComponent } from './notes.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NotesItemComponent } from './notes-list/notes-item/notes-item.component';
import { NotesEditComponent } from './notes-edit/notes-edit.component';
import { NotesRoutingModule } from './notes-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
	declarations: [
	NotesComponent,
    NotesListComponent,
    NotesItemComponent,
    NotesEditComponent,
    


	],
	imports: [NotesRoutingModule, SharedModule],
	
})

export class NotesModule {

}