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
  matchCards = new Array<ICard>();
  allMatches = 0;
  win = false;

  constructor(private cSvc: CardService) { }

  ngOnInit(): void {
    this.generateCards();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }

  generateCards(): void {
    this.subscriptions.push(
      this.cSvc.getCardsData().subscribe({
        next: (data) => {
          this.cardData = data;
          this.cardData.sort(() => Math.random() - 0.5);
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
    if (singleCard.status === 'initial' && this.matchCards.length < 2) {
      singleCard.status = 'flipped';
      this.matchCards.push(singleCard);

      if (this.matchCards.length === 2) {
        this.confirmMatch();
      }
    } else if (singleCard.status === 'flipped') {
      singleCard.status = 'initial';
      this.matchCards = [];
    }
  }

  confirmMatch(): void {
    setTimeout(() => {
      const card1 = this.matchCards[0];
      const card2 = this.matchCards[1];
      this.cardData.map(c => {
        if ( c.index === card1.index || c.index === card2.index) {
          card1.cardNum === card2.cardNum ? (c.status = 'match', this.allMatches++) : c.status = 'initial';
        }
      });
      this.matchCards = [];
      if (this.allMatches === this.cardData.length) {
        this.win = true;
      }
    }, 1000);
  }

}
