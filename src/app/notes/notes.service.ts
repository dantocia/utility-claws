import { Injectable } from '@angular/core';

import {Note} from './note.model';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})

export class NotesServices {
    notesChanged = new Subject<Note[]>();
    
    private notes: Note[] = [
        new Note('Test Name', 'Test Description'),
        new Note('Test n2', 'Test d2'),
    ];
    
    getNotes(){
        return this.notes.slice();
    }
    
    addRecipe(note: Note){
		this.notes.push(note);
		this.notesChanged.next(this.notes.slice());

	}
}