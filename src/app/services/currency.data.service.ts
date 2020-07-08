import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

import { Currencies } from './fake-data/currencies';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface ICurrency {
  Id: number;
  Name: string;
  Short: string;
  Sym: string;
}


@Injectable({ providedIn: 'root' })
export class CurrencyDataService {

  constructor(private http: HttpClient) { }

  getCurrency(term: string = null): Observable<ICurrency[]> {
    let items = this.currency;
    if (term) {
      items = items.filter(x => x.Name.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) > -1);
    }
    return of(items).pipe(delay(500));
  }

  public get currency() {
    return Currencies.currency;
  }

}

