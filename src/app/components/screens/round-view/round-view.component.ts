import { Component, Input, OnInit } from '@angular/core';
import { Round } from 'src/app/model/model';

@Component({
  selector: 'app-round-view',
  templateUrl: './round-view.component.html',
  styleUrls: ['./round-view.component.css']
})
export class RoundViewComponent implements OnInit {

  @Input() round: Round = new Round("", [])
  @Input() roundIndex: number = 0
  @Input() score: number = 0
  numbers = new Array(8)

  constructor() { }

  ngOnInit(): void {
  }


}
