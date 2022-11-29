import { Component, Input, OnInit } from '@angular/core';
import { MediaState } from 'src/app/model/media';

@Component({
  selector: 'app-input-playback',
  templateUrl: './input-playback.component.html',
  styleUrls: ['./input-playback.component.css']
})
export class InputPlaybackComponent implements OnInit {

  @Input() mediaState = new MediaState()

  get sliderWidth(): number {
    return 40
  }

  constructor() { }

  ngOnInit(): void {
  }
 

}
