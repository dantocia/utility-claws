import { Component, OnInit } from '@angular/core';

import {FormGroup, FormControl, FormArray, Validators} from '@angular/forms';
import { NotesServices } from '../notes.service';

@Component({
  selector: 'app-notes-edit',
  templateUrl: './notes-edit.component.html',
  styleUrls: ['./notes-edit.component.css']
})
export class NotesEditComponent implements OnInit {

  notesForm= new FormGroup({
    name: new FormControl('',Validators.required),
    desc:  new FormControl('', Validators.required)

  })

  
  constructor(private notesService: NotesServices) { }

  ngOnInit() {
  }
  onSubmit(){
    console.warn(this.notesForm.value);
    this.notesService.addRecipe(this.notesForm.value);
  }
  onCancel(){
    console.log('on cancel');
  }
  
  

}
