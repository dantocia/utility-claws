import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Utility Claws';

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }
  

  toEventTimer(){
    this.router.navigate(['event-timer']);
  }
  toNotes(){
    this.router.navigate(['notes']);
  }
  toRecipe(){
    this.router.navigate(['recipe']);

  }

}
