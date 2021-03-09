import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICard } from '../../models/i-card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card: ICard;

  @Output() cardSelected: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

}
