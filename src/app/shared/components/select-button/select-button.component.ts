import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-select-button',
  templateUrl: 'select-button.component.html',
  styleUrls: ['select-button.component.css']
})

export class SelectButtonComponent implements OnInit {
  @Output() changeSelect = new EventEmitter<string>();
  public value: string = 'left';

  constructor() {
  }

  ngOnInit() {
  }

  onChangeSelect(option: string):void {
    this.value = option;
    this.changeSelect.emit(option);
  }
}
