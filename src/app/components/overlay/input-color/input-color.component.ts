import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-color',
  templateUrl: './input-color.component.html',
  styleUrls: ['./input-color.component.css']
})
export class InputColorComponent implements OnInit {

  @Input() title = ""
  @Input() color = ""
  @Output() colorChange = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  colorChanged(newValue: string) {
    this.color = newValue
    this.colorChange.emit(newValue);
    console.log(newValue);
    
  }

}
