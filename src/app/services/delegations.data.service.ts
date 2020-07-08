import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface IDelegations {
  Id: number;
  Country: string;
  UpdateDate: string;
  UpdatedBy: string;
}


@Injectable({ providedIn: 'root' })
export class DelegationDataService {

  constructor(private http: HttpClient) { }

  // getDiscipline(term: string = null): Observable<IDelegations[]> {
  //   let items = this.delegation;
  //   if (term) {
  //     items = items.filter(x => x.FullName.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) > -1);
  //   }
  //   return of(items).pipe(delay(500));
  // }

  // public get discipline() {
  //   return Delegations.delegation;
  // }

}

