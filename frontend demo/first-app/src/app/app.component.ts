import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'first-app';
  varParentToChild: string = "parent to child"
  
  varChildToParent: string = "";
  @ViewChild(LoginComponent) childObj:any;

  ngAfterViewInit(){
    console.log(this.childObj);
    // this.varChildToParent = this.childObj.varcp;
  }

  varChToParEvent: any;
  receiveMessage($event:any){
    this.varChToParEvent = $event;
  }

  constructor( private router :Router){}


  onSubmit(){
    this.router.navigate(['/array'], {queryParams: {page: 1, order: 'new'}});
  }
}
