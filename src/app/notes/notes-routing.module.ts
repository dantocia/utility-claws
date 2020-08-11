import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { NotesComponent } from './notes.component';
import { NotesEditComponent } from './notes-edit/notes-edit.component';
import { NotesListComponent } from './notes-list/notes-list.component';


const routes: Routes = [
    {path: '', component: NotesComponent, children: [
        {path: '', component: NotesListComponent},
        {path:'new', component: NotesEditComponent },
        {path: ':id/edit', component: NotesEditComponent}
    ]}


];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]

})

export class NotesRoutingModule{}