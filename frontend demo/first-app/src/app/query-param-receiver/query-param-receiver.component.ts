import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-query-param-receiver',
  templateUrl: './query-param-receiver.component.html',
  styleUrls: ['./query-param-receiver.component.css']
})
export class QueryParamReceiverComponent implements OnInit{

  constructor(private route : ActivatedRoute){}

  ngOnInit(): void {

    this.route.queryParamMap.subscribe(value => {
      console.log(value);
      console.log(value.get('page'));
      console.log(value.get('sort'));
      console.log(value.get('orderBy'));
      console.log(value.get('sankha'));

    });
  }

}
