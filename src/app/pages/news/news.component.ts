import { Component, OnInit } from '@angular/core';
import {Option} from "../../models/option";

@Component({
  selector: 'app-news-component',
  templateUrl: './news.component.html'
})

export class NewsComponent implements OnInit {
  public options: Option[];
  public optionSelected?: Option;
  constructor() {
    this.options = [
      {icon: 'icon-a', label: 'Angular', value: 'angular'},
      {icon: 'icon-r', label: 'Reactjs', value: 'reacts'},
      {icon: 'icon-v', label: 'Vuejs', value: 'vue'}
    ];
  }

  ngOnInit() { }

  onChangeSelection(event: Option):void{
    console.log(event);
  }
}
