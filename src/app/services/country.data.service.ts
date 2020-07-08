import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

import { Countries } from './fake-data/countries';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface ICountry {
  Alpha3Code: string;
  IocCode: string;
  Name: string;
  IsMemberOfUeg: boolean;
}

@Injectable({ providedIn: 'root' })
export class CountryDataService {

  constructor(private http: HttpClient) { }

  getCountry(term: string = null): Observable<ICountry[]> {
    let items = this.country;
    if (term) {
      items = items.filter(x => x.Name.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) > -1);
    }
    return of(items).pipe(delay(500));
  }

  public get country() {
    return Countries.country;
  }

}

