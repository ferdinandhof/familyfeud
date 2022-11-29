import { Component, Input, OnInit } from '@angular/core';

export class Shorcut {
    constructor(public title: string, public keys: string[]) {}
}


@Component({
  selector: 'app-shorcut',
  templateUrl: './shorcut.component.html',
  styleUrls: ['./shorcut.component.css']
})
export class ShorcutComponent implements OnInit {

  @Input() shortcut = new Shorcut("", [])
  
  constructor() { }

  ngOnInit(): void {
  }

}
