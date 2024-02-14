import { Component, OnInit } from '@angular/core';
import { FormBuilder, AbstractControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-practice',
  templateUrl: './reactive-form-practice.component.html',
  styleUrls: ['./reactive-form-practice.component.css']
})
export class ReactiveFormPracticeComponent implements OnInit {
  formModel: any = {firstName : null};
  form: FormGroup;

  constructor(private formBuilder : FormBuilder){
    this.form = this.formBuilder.group({
      firstName : [this.formModel.firstName, [Validators.required]],
      lastName : [this.formModel.lastName, [Validators.required]],
      country : [this.formModel.country, [Validators.required]],
      gender : [this.formModel.gender, [Validators.required]],
      hobbies : [this.formModel.hobbies, [Validators.required]]
    });

  }
   ngOnInit(): void {
     
   }
  onRegister(){
    console.log(this.formModel);
  }
}
