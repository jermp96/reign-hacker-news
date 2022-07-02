import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public optionSelected?: string;

  constructor() {
    this.optionSelected = 'left';
  }

  onSetOptionSelected(event: string):void{
    this.optionSelected = event;
  }
}
