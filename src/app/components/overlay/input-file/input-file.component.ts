import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RoundsFile } from 'src/app/model/model';

@Component({
  selector: 'app-input-file',
  templateUrl: './input-file.component.html',
  styleUrls: ['./input-file.component.css']
})
export class InputFileComponent implements OnInit {

  @Input() file: RoundsFile
  @Output() fileChange = new EventEmitter<RoundsFile>()
  fileName: string = ""

  constructor() { }

  ngOnInit(): void {
  }

  getFile(event:Event) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      console.log(e.target.result)
      const obj = JSON.parse(e.target.result)
      this.file = new RoundsFile(this.fileName, obj)
      this.fileChange.emit(this.file)
    };
    const element = event.target as HTMLInputElement
    if (element.files != null) {
      const f = element.files[0]
      this.fileName = f.name
      reader.readAsText(f)
    }
  }

}
