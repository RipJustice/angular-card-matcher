import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-win',
  templateUrl: './win.component.html',
  styleUrls: ['./win.component.scss']
})
export class WinComponent implements OnInit {

  @Output() replay = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
