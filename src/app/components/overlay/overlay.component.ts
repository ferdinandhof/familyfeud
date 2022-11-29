import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';
import { MediaState, Music } from 'src/app/model/media';
import { Round, State, Screen } from 'src/app/model/model';
import { environment } from 'src/environments/environment';
import { Shorcut } from '../view/shorcut/shorcut.component';

export class Option<Type> {
  constructor(public title: string, public associated: Type) {}
}

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css']
})
export class OverlayComponent implements OnInit {

  @Input() visible = false
  @Output() visibleChange = new EventEmitter<boolean>()
  @Output() function = new EventEmitter<string>()

  @Input() state = new State()
  @Input() mediaState = new MediaState()

  @HostBinding('class.visible') private get isVisible() {
    return this.visible
  }

  screens: Option<Screen>[] = [
    new Option("Start", Screen.start),
    new Option("Intro", Screen.intro),
    new Option("Instructions", Screen.instructions),
    new Option("Round", Screen.round),
    new Option("End", Screen.end)
  ]

  musics: Option<Music | null>[] = [
    new Option("None", null),
    new Option("Game", Music.game),
    new Option("Millionaire", Music.millionaire),
    new Option("Jazz", Music.jazz)
  ]

  shorcuts: Shorcut[] = [
    new Shorcut('Menu', ["ESC"]),
    new Shorcut('Advance', ["Space"]),
    new Shorcut('Select Team 1', ["←"]),
    new Shorcut('Select Team 2', ["→"]),
    new Shorcut('Increase Score', ["↑"]),
    new Shorcut('Decrease Score', ["↓"]),
    environment.buzzer1.menuDescription,
    environment.buzzer2.menuDescription,
    

    new Shorcut('Reveal Answer #', ["1 - 8"]),
    new Shorcut('Unreveal Answer #', ["Shift","1 - 8"]),
    new Shorcut('Toggle Reveal All Answers', ["Shift", "A"]),
    new Shorcut('Strike', ["X"]),
    new Shorcut('Unstrike', ["Shift", "X"]),
    new Shorcut('Credit Score', ["S"]),
    new Shorcut('Uncredit Score', ["Shift", "S"]),
    new Shorcut('Reset', ["R"]),
    new Shorcut('Reset All', ["Shift", "R"]),
    

    new Shorcut('Music "Game"', ["⌥", "1"]),
    new Shorcut('Music "Millionaire"', ["⌥", "2"]),
    new Shorcut('Music "Jazz"', ["⌥", "3"]),
    new Shorcut("Play/Pause Music", ["⌥", "P"]),
    new Shorcut("Duck Music", ["⌥", "O"]),
    new Shorcut('Volume Up', ["⌥", "↑"]),
    new Shorcut('Volume Up', ["⌥", "↓"])
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

  closeButtonTapped() {
    this.visible = false
    this.visibleChange.emit(false)
  }

  selectMusic(music: Music | null) {
    if(music != null) {
      this.mediaState.playMusic(music)
    } else {
      this.mediaState.stopMusic()
    }
  }

  selectScreen(screen: Screen) {
    this.state.screen = screen
  }

  selectRound(round: Round) {
    this.state.screen = Screen.round
    const index = this.state.rounds.indexOf(round)
    this.state.currentRound = round
    this.state.roundIndex = index
    this.state.tempScore = 0
  }

  perform(key: string) {
    this.function.emit(key)
  }
}
