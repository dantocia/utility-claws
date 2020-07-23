import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

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
import { NgbdDatepickerPopup } from './datepicker-popup/datepicker-popup.component';


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
    NotesItemComponent,
    NgbdDatepickerPopup
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
