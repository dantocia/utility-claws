import { Injectable } from '@angular/core';

import {Note} from './note.model';

@Injectable({providedIn: 'root'})

export class NotesServices {
    
    private notes: Note[] = [
        new Note('Test Name', 'Test Description'),
        new Note('Test n2', 'Test d2'),
    ];
    
    getNotes(){
        return this.notes.slice();
    }
}