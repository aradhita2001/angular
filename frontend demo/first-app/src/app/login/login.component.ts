import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @Input()
  varpc: any;

  @Input()
  varpc2: any;

  varOutChToPar: string = "this data goes from child to parent on click of button";
  @Output() messageEvent = new EventEmitter<String>();
  sendMessage(){
    this.messageEvent.emit(this.varOutChToPar);
  }

  title: string = "Data from component";
  red: string = "red";  
  imgurl: string = "https://th.bing.com/th/id/R.26fb5f04bffb106adc894de80e3fd294?rik=hD5y2YVekLeoIA&riu=http%3a%2f%2fwallpapercave.com%2fwp%2ffHPbkMO.jpg&ehk=wbCk6GQMdlLbZmdFuXpIJaIVp9mePkw9TWUiAo18OQo%3d&risl=&pid=ImgRaw&r=0";
  changeColor: boolean = true;
  light : boolean = true;
  oneWayData: any = 12;

  varcp: string = "going from child to parent";

  buttonClick(){
    console.log("button clicked");
  }

  onKeyup(){
    console.log("key pressed");
  }

  onKeyUp($event: any){
    if($event.keyCode == 13)
    console.log($event);
  }

  onEnter(value: any){
    console.log(value);
  }

  changeTheme(){
    this.light = this.light ? false : true;
  }

  onKey(){
    // this.oneWayData = data;
    console.log(this.oneWayData);
  }
}
