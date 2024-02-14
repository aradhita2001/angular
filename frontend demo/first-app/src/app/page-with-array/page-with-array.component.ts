import { Component } from '@angular/core';

@Component({
  selector: 'app-page-with-array',
  templateUrl: './page-with-array.component.html',
  styleUrls: ['./page-with-array.component.css']
})
export class PageWithArrayComponent {

  arr = [
    {
      id: 1, name : 'item1', desc: 'sankha with milk'
    },
    {
      id: 2, name : 'item 2', desc : 'sankha lost phone'
    },
    {
      id: 3, name : 'item3', desc : 'sankha hits wrong person'
    }
  ];
}
