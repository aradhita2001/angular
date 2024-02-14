import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { PageWithArrayComponent } from '../page-with-array/page-with-array.component';

@Component({
  selector: 'app-array-details',
  templateUrl: './array-details.component.html',
  styleUrls: ['./array-details.component.css']
})
export class ArrayDetailsComponent implements OnInit {

  obj: PageWithArrayComponent;
  display: any;

  constructor(private route: ActivatedRoute) {
    this.obj = new PageWithArrayComponent();
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(value => {
      console.log(value);
      let id = value.get("id");
      console.log(id);
      this.display = this.obj.arr[Number(id)];
    })
  }

}
