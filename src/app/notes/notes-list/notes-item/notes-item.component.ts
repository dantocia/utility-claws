import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../../note.model';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { NotesServices } from '../../notes.service';


@Component({
  selector: 'app-notes-item',
  templateUrl: './notes-item.component.html',
  styleUrls: ['./notes-item.component.css']
})
export class NotesItemComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router, private notesService: NotesServices) { }

  ngOnInit() {
  }

 @Input() notes: Note;
 @Input() index: number;

 onEditNote(){
  this.router.navigate([this.index, 'edit'], {relativeTo: this.route})
//	this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route})
}
onDeleteNote(){
  console.log('delete this: ');
  console.log(this.index);
  this.notesService.deleteNote(this.index);
  
}



}
