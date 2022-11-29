import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Answer } from 'src/app/model/model';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {

  @HostBinding('class.active') private get isActive() {
    return this.answer?.isHidden == false
  }
  @HostBinding('class.revealed') private get isRevealed() {
    return this.answer?.isRevealed == true
  }

  @Input() index = 0
  @Input() answer: Answer | null = null

  constructor() { }

  ngOnInit(): void {
  }

}
