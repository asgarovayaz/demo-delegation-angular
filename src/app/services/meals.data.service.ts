import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MealTypes } from './fake-data/mealtypes';

export interface IMealTypes {
  Id: number;
  Name: string;
}

export interface IMeals {
  Id: number;
  Type: string;
  Price: number;
  Quantity: number;
  Available: number;
}

export interface IMealVenues {
    Id: number;
    Name: string;
    BreakFastTotal: number;
    BreakFastAvailable: number;
    LunchTotal: number;
    LunchAvailable: number;
    DinnerTotal: number;
    DinnerAvailable: number;
}


@Injectable({ providedIn: 'root' })
export class MealsDataService {

  constructor(private http: HttpClient) { }

  getMeal(term: string = null): Observable<IMealTypes[]> {
    let items = this.meals;
    if (term) {
      items = items.filter(x => x.Name.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) > -1);
    }
    return of(items).pipe(delay(500));
  }

  public get meals() {
    return MealTypes.types;
  }

}

