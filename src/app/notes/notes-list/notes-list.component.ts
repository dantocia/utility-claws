import { Component, OnInit, OnDestroy } from '@angular/core';
import { Note } from '../note.model';
import { NotesServices } from '../notes.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit,OnDestroy {


  notes: Note[];
  subscription: Subscription;


  constructor( private notesServices: NotesServices) { }
  

  ngOnInit() {
    this.subscription = this.notesServices.notesChanged
    .subscribe(
      (notes: Note[]) =>{
        this.notes = notes;
        
      }
    );
    
    console.log('hello');
    this.notes = this.notesServices.getNotes();
    
  }
  

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
