import { Component, OnInit } from '@angular/core';
import { Note } from '../note.model';
import { NotesServices } from '../notes.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {

  notes: Note[];

  constructor( private notesServices: NotesServices) { }

  ngOnInit() {
    console.log('hello');
    this.notes = this.notesServices.getNotes();
  }

}
