import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }


  ngOnInit() {
  }

  toNewNote(){
    this.router.navigate(['notes/new']);
  }
  
}
