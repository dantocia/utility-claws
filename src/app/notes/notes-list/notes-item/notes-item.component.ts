import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../../note.model';

@Component({
  selector: 'app-notes-item',
  templateUrl: './notes-item.component.html',
  styleUrls: ['./notes-item.component.css']
})
export class NotesItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

 @Input() notes: Note;
 @Input() index: number;

}
