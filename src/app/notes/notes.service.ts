import { Injectable } from '@angular/core';

import {Note} from './note.model';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})

export class NotesServices {
    notesChanged = new Subject<Note[]>();
    
    private notes: Note[] = [
        new Note('Test Name', 'Test Description',{day:29, month:0o1, year:1993}),
        new Note('Test n2', 'Test d2',{day:26, month: 0o1, year:1994}),
    ];
    
    getNotes(){
        return this.notes.slice();
    }
    getNote(index: number){
        return this.notes[index];
    }
    
    addNote(note: Note){
		this.notes.push(note);
		this.notesChanged.next(this.notes.slice());

    }
    
    updateNote(index: number, newNote: Note){
        this.notes[index] = newNote;
        this.notesChanged.next(this.notes.slice());

    }

    deleteNote(index: number){
        console.log('delete this on service: '+index);

        this.notes.splice(index,1);
        this.notesChanged.next(this.notes.slice());
       
        console.log(this.notes);

    }
}