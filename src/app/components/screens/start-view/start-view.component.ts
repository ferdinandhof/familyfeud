import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RoundsFile } from 'src/app/model/model';

@Component({
  selector: 'app-start-view',
  templateUrl: './start-view.component.html',
  styleUrls: ['./start-view.component.css']
})
export class StartViewComponent {

  @Input() file: RoundsFile
  @Output() fileChange = new EventEmitter<RoundsFile>()

  constructor() { }

  fileChanged(file: RoundsFile) {
    this.file = file
    this.fileChange.emit(file)
  }
}
