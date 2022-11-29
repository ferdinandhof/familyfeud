import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent implements OnInit {

  @Input() title = ""
  @Input() text = ""
  @Output() textChange = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  textChanged(newValue: string) {
    this.text = newValue
    this.textChange.emit(newValue);
    
  }

}
