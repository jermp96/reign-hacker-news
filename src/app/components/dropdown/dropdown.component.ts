import {Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild} from '@angular/core';
import {Option} from "../../models/option.model";

@Component({
  selector: 'app-dropdown',
  templateUrl: 'dropdown.component.html',
  styleUrls: ['dropdown.component.css']
})

export class DropdownComponent implements OnInit {
  @ViewChild('selectInput') selectInput?: ElementRef;

  @Output() changeSelect = new EventEmitter<Option>();
  @Input() options?: Option[];
  @Input() placeholder?:string;

  public value?:Option;
  public overlayVisible?: boolean;

  constructor(private renderer: Renderer2) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if(e.target !== this.selectInput?.nativeElement){
        this.hide();
      }
    });
  }

  ngOnInit():void {
  }

  show():void {
    this.overlayVisible = true;
  }

  hide():void {
    this.overlayVisible = false;
  }

  onChangeSelect(option: Option):void{
    this.value = option;
    this.changeSelect.emit(option);
    this.hide();
  }
}
