import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Roles } from './fake-data/roles';

export interface IRole {
  Id: number;
  Name: string;
}

@Injectable({ providedIn: 'root' })
export class RolesDataService {

  constructor(private http: HttpClient) { }

  getRole(term: string = null): Observable<IRole[]> {
    let items = this.role;
    if (term) {
      items = items.filter(x => x.Name.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) > -1);
    }
    return of(items).pipe(delay(500));
  }

  public get role() {
    return Roles.role;
  }

}

