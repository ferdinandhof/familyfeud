import { Component, Input, OnInit } from '@angular/core';
import { MediaState, Sound } from 'src/app/model/media';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-intro-view',
  templateUrl: './intro-view.component.html',
  styleUrls: ['./intro-view.component.css']
})
export class IntroViewComponent implements OnInit {

  @Input() mediaState = new MediaState()

  audio: HTMLAudioElement
  isTitleVisible = false
  isHostedVisible = false
  isFigureVisible = false
  host = ""

  constructor() { 
    this.host = environment.host
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.isTitleVisible = true
      setTimeout(() => {
        this.isFigureVisible = true
        setTimeout(() => {
          this.isHostedVisible = true
        }, 2000);
      }, 2000);
    }, 2000);

    
    this.audio = this.mediaState.getAudio(Sound.theme)
    this.audio.play() // 28s
    this.mediaState.pauseMusic()
  }

  ngOnDestroy() {
    this.audio.pause()
  }

}
