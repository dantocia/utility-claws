import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventTimerComponent } from './event-timer/event-timer.component';
import { NotesComponent } from './notes/notes.component';
import { RecipeComponent } from './recipe/recipe.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NotesEditComponent } from './notes/notes-edit/notes-edit.component';
import { NotesListComponent } from './notes/notes-list/notes-list.component';
import { NotesItemComponent } from './notes/notes-list/notes-item/notes-item.component';

@NgModule({
  declarations: [
    AppComponent,
    EventTimerComponent,
    NotesComponent,
    RecipeComponent,
    HeaderComponent,
    HomeComponent,
    NotesEditComponent,
    NotesListComponent,
    NotesItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
