import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ICard } from '../../models/i-card';
import { CardService } from '../../services/card-service.service';

@Component({
  selector: 'app-card-match',
  templateUrl: './card-match.component.html',
  styleUrls: ['./card-match.component.scss']
})
export class CardMatchComponent implements OnInit, OnDestroy {

  private subscriptions = new Array<Subscription>();
  cardData: ICard[];

  constructor(private cSvc: CardService) { }

  ngOnInit(): void {
    this.generateCards();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }

  cardShuffle(cards: ICard[]): ICard[] {
    return cards.sort(() => Math.random() - 0.5);
  }

  generateCards(): void {
    this.subscriptions.push(
      this.cSvc.getCardsData().subscribe({
        next: (data) => {
          this.cardData = data;
          this.cardShuffle(this.cardData);
        },
        error: (error) => {
          // Just having this catch here in case this ever switches to using a service with an actual api call
          console.error(error);
        }
      })
    );
  }

  cardFlip(i: number): void {
    const singleCard = this.cardData[i];

    if (singleCard.status === 'initial') {
      singleCard.status = 'flipped';
    } else if (singleCard.status === 'flipped') {
      singleCard.status = 'initial';
    }
  }

}
