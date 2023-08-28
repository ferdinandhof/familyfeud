import { Component, HostListener } from '@angular/core';
import { Answer, Round, State } from 'src/app/model/model';

@Component({
  selector: 'app-second-screen',
  templateUrl: './second-screen.component.html',
  styleUrls: ['./second-screen.component.css']
})
export class SecondScreenComponent {

  state: State | null
  numbers = new Array(8)

  constructor() { }

  @HostListener('window:message', ['$event'])
  receivedMessage(event:MessageEvent) {
    console.log(event)
    this.state = event.data
    this.state!.currentRound.isQuestionRevealed = true
    this.state!.currentRound.isFullyRevealed = true
    this.state!.currentRound.answers = event.data!.currentRound.answers.map((answer: Answer) => { 
      let a = new Answer(answer.text, answer.amount)
      a.isRevealed = !answer.isHidden 
      a.isHidden = !answer.isRevealed
      return a
    })
  }

}
