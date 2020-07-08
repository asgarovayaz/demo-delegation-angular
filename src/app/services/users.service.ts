import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

export interface IUser {
  id: number;
  Role: string;
  FirstName: string;
  LastName: string;
  Country?: string;
  Email: string;
  Status: number;
}

export interface IUserResponse {
  data: IUser[];
  status: boolean;
  totalItem: number;
  totalPage: number;
  pageSize: string;
  currentPage: string;
}

@Injectable({ providedIn: 'root' })
export class ProjectService {

  constructor(private http: HttpClient) { }

  getUsers(pageSize: number = 10, currentPage: number = 1, search: string = '', orderBy: string = '') {
    // const url = environment.apiUrl + '/cakes/paging';
    const url = '';
    let params = new HttpParams();
    params = params.append('pageSize', pageSize + '');
    params = params.append('currentPage', currentPage + '');
    params = params.append('search', search);
    params = params.append('orderBy', orderBy);

    return this.http.get(url, { params })
      .pipe(
        map((res: IUserResponse) => {
          return res;
        }),
        catchError(errorRes => {
          return throwError(errorRes);
        })
      );

  }
}
