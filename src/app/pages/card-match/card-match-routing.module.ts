import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardMatchComponent } from './card-match.component';

const routes: Routes = [{ path: '', component: CardMatchComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardMatchRoutingModule { }
