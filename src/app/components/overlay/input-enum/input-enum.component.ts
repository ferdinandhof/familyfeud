import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Option } from '../overlay.component';

@Component({
  selector: 'app-input-enum',
  templateUrl: './input-enum.component.html',
  styleUrls: ['./input-enum.component.css']
})
export class InputEnumComponent<Type> implements OnInit {

  @Input() options: Option<Type>[] = []
  @Input() selectedType: Type | null = null
  @Output() selectedTypeChange = new EventEmitter<Type>()

  constructor() { }

  ngOnInit(): void {
  }

}
