import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardMatchComponent } from './card-match.component';
import { CardComponent } from '../../components/card/card.component';
import { CardMatchRoutingModule } from './card-match-routing.module';



@NgModule({
  declarations: [CardMatchComponent, CardComponent],
  imports: [
    CommonModule,
    CardMatchRoutingModule
  ]
})
export class CardMatchModule { }
