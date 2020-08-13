import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';

import {FormGroup, FormControl, FormArray, Validators} from '@angular/forms';
import { NotesServices } from '../notes.service';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';




@Component({
  selector: 'app-notes-edit',
  templateUrl: './notes-edit.component.html',
  styleUrls: ['./notes-edit.component.css']
})
export class NotesEditComponent implements OnInit {

  index: number;
  editMode = false;

  notesForm: FormGroup;
  model: NgbDateStruct;

  

  
  constructor(private notesService: NotesServices, private route: ActivatedRoute,
      private router: Router) { }

  ngOnInit() {
    this.route.params
  	.subscribe(
  		(params: Params) => {

  			this.index = +params['id'];
  			this.editMode = params['id'] != null;
  			this.initForm();
  			
  			}
  		);
  }
  private initForm(){
    let noteName = '';
    let noteDesc = '';
    let noteDate: { day: number; month: number; year: number; };

    if(this.editMode){
      const note = this.notesService.getNote(this.index);
      noteName = note.name;
      noteDesc = note.desc;
      noteDate = note.date;
      
    }
    this.notesForm= new FormGroup({
      name: new FormControl(noteName,Validators.required),
      desc:  new FormControl(noteDesc, Validators.required),
      date: new FormControl(noteDate, Validators.required )
      
  
    })
  }

  onSubmit(){
    if(this.editMode){
      console.log('notesform value: '+this.notesForm.value+','+this.index);
      this.notesService.updateNote(this.index, this.notesForm.value);
      this.onCancel()
    }else{
      console.log('notesform value: '+this.notesForm.value+','+this.index);
     this.notesService.addNote(this.notesForm.value);
      this.onCancel()

    }
    
  }
  onCancel(){
    console.log('on cancel');
    this.router.navigate(['/notes'], {relativeTo: this.route});
  }
  
  

}
