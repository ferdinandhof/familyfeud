import { Component, Input, OnInit } from '@angular/core';
import { MediaState, Sound } from 'src/app/model/media';
import { State, Team } from 'src/app/model/model';

@Component({
  selector: 'app-end-view',
  templateUrl: './end-view.component.html',
  styleUrls: ['./end-view.component.css']
})
export class EndViewComponent implements OnInit {

  @Input() state = new State()
  @Input() mediaState = new MediaState()

  audio: HTMLAudioElement

  constructor() { }

  ngOnInit(): void {
    this.audio = this.mediaState.getAudio(Sound.theme)
    this.audio.play() // 28s
    this.mediaState.pauseMusic()
  }

  ngOnDestroy() {
    this.audio.pause()
  }

  get winningTeam(): Team | null{
    const t1 = this.state.team1
    const t2 = this.state.team2
    if(t1.score == t2.score) {
      return null
    } else if (t1.score > t2.score) {
      return t1
    } else {
      return t2
    }
  }

}
