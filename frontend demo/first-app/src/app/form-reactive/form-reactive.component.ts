import { Component } from '@angular/core';
import { NgForm , FormGroup, FormControl, Validators } from "@angular/forms";


@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent {

  form : any;

  constructor(){
    this.form = new FormGroup({
      fullName: new FormControl('', 
      [
        Validators.required,
        Validators.minLength(6),
      ]),
      email:  new FormControl('',
      [
        Validators.required,
        // Validators.email,
        Validators.minLength(6)
      ]),
      address: new FormControl('', 
      [
        Validators.required,
        Validators.minLength(6)
 
      ])
    });

  }

  get fullName()  {
    return this.form.get("fullName");
  }

  get email()  {
    return this.form.get("email");
  }

  get address()  {
    return this.form.get("address");
  }

}

