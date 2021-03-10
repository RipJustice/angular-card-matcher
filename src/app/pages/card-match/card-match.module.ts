import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardComponent } from '../../components/card/card.component';
import { WinComponent } from '../../components/win/win.component';
import { CardMatchRoutingModule } from './card-match-routing.module';
import { CardMatchComponent } from './card-match.component';


@NgModule({
  declarations: [CardMatchComponent, CardComponent, WinComponent],
  imports: [
    CommonModule,
    CardMatchRoutingModule,
    ButtonModule
  ]
})
export class CardMatchModule { }
