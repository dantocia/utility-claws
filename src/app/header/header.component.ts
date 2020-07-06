import { Component, OnInit, Input } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() titulo: string;

  
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  toHome(){
    this.router.navigate(['']);
  }

}
