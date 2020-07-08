import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

import { Disciplines } from './fake-data/disciplines';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface IDiscipline {
  Id: number;
  FullName: string;
  ShortName: string;
}


@Injectable({ providedIn: 'root' })
export class DisciplinesDataService {

  constructor(private http: HttpClient) { }

  getDiscipline(term: string = null): Observable<IDiscipline[]> {
    let items = this.discipline;
    if (term) {
      items = items.filter(x => x.FullName.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) > -1);
    }
    return of(items).pipe(delay(500));
  }

  public get discipline() {
    return Disciplines.discipline;
  }

}

