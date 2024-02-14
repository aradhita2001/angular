import { Component } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent {

  buttonMessage : string|null = "none";

  clicked(button: HTMLButtonElement){
    this.buttonMessage = button.textContent;
  }
}
