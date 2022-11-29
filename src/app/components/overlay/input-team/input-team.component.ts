import { Component, Input, OnInit } from '@angular/core';
import { Team } from 'src/app/model/model';

@Component({
  selector: 'app-input-team',
  templateUrl: './input-team.component.html',
  styleUrls: ['./input-team.component.css']
})
export class InputTeamComponent implements OnInit {

  @Input() team = new Team("","")
  @Input() title: string = "Team 1"

  constructor() { }

  ngOnInit(): void {
  }

}
