import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Round } from 'src/app/model/model';

@Component({
  selector: 'app-input-round',
  templateUrl: './input-round.component.html',
  styleUrls: ['./input-round.component.css']
})
export class InputRoundComponent implements OnInit {

  @Input() rounds: Round[] = []
  @Input() selectedRound: Round | null = null
  @Output() selectedRoundChange = new EventEmitter<Round>()

  constructor() { }

  ngOnInit(): void {
  }

}
