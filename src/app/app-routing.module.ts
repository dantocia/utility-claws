import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import {EventTimerComponent} from './event-timer/event-timer.component';
import {NotesComponent} from './notes/notes.component';
import {RecipeComponent} from './recipe/recipe.component';
import { HomeComponent } from './home/home.component';
import { NotesEditComponent } from './notes/notes-edit/notes-edit.component';




const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'event-timer', component: EventTimerComponent },
  { path: 'notes', component: NotesComponent}, 
    {path: 'notes/new', component: NotesEditComponent},
  { path: 'recipe', component: RecipeComponent}
  //{ path: '',}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
