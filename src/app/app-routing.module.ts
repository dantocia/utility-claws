import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import {EventTimerComponent} from './event-timer/event-timer.component';
import {RecipeComponent} from './recipe/recipe.component';
import { HomeComponent } from './home/home.component';





const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'event-timer', component: EventTimerComponent },
  { path: 'notes',loadChildren: './notes/notes.module#NotesModule'}, 
  { path: 'recipe', component: RecipeComponent}
  //{ path: '',}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
