import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Team } from 'src/app/model/model';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  @Input() team: Team = new Team("","")
  
  @Input() alignmemt: string = "left"

  @HostBinding('class.leftAligned') private get isLeftAligned() { return this.alignmemt == "left" }
  @HostBinding('class.rightAligned') private get isRightAligned() { return this.alignmemt == "right" }
  @HostBinding('style.background') private get getBackground(){
    return this.team.color;
  }

  @HostBinding('style.box-shadow') private get getBoxShadow(){
    return `0 0 200px 50px ${this.team.color}`
  }

  constructor() { }

  ngOnInit(): void {
  }

  makeArray(amount: number) {
    return new Array(amount)
  }

}
