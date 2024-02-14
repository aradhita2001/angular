import { Component } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component {
  arr = [1,2,3,4,5,6,7];
  arr2 = [{a:1}, {a:2}, {a:3}];
}
