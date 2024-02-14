import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  str: any;
  constructor(){}

  ngOnInit(): void {
    const obsTest$ = new Observable(observer => {
      // console.log('printed from observable');
      observer.next('Returned from observable 1');
      observer.next('Returned from observable 2');

      setTimeout(() => {
        observer.next('returned from timeout function');
      }, 4000);

      observer.next('Returned from observable 3');
    }).subscribe(value => {
      this.str = value;
      console.log(value);
    });

    const obsTest = function () {
      return "Returned from function";
    }
    
    console.log(obsTest());
  }

  

}
