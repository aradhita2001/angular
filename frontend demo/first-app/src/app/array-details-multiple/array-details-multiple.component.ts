import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-array-details-multiple',
  templateUrl: './array-details-multiple.component.html',
  styleUrls: ['./array-details-multiple.component.css']
})
export class ArrayDetailsMultipleComponent {

  
  constructor(private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(value => {
      console.log(value);
      let id = value.get("id");
      console.log(id);
      let name = value.get("name");
      console.log(name);
    })
  }
}
