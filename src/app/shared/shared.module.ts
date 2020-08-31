import {NgModule} from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {CommonModule} from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
	declarations: [

	],
	imports: [
	CommonModule, NgbModule, CommonModule,  ReactiveFormsModule, RouterModule
	],
	exports:[
	
    CommonModule, NgbModule, CommonModule,  ReactiveFormsModule, RouterModule
	],
	

})

export class SharedModule{}