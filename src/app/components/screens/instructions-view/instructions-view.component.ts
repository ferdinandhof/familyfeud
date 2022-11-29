import { Component, Input, OnInit } from '@angular/core';
import { State } from 'src/app/model/model';

@Component({
  selector: 'app-instructions-view',
  templateUrl: './instructions-view.component.html',
  styleUrls: ['./instructions-view.component.css']
})
export class InstructionsViewComponent implements OnInit {

  @Input() state = new State()

  constructor() { }

  ngOnInit(): void {
  }

}
