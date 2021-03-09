import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mockCardData } from '../mocks/mock-card-data';
import { ICard } from '../models/i-card';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  // HttpClient is not currently in use, however this would be needed if the mock data were to ever be replaced by an api call
  constructor(private http: HttpClient) { }

  getCardsData(): Observable<ICard[]> {
    return of(mockCardData);
  }
}
