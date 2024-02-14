import { Component } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-forms-template',
  templateUrl: './forms-template.component.html',
  styleUrls: ['./forms-template.component.css']
})
export class FormsTemplateComponent {

  onSubmit(f:NgForm){
    console.log(f);
  }

  getValue(data: NgModel){
    console.log(data.errors);
  }
  
}
