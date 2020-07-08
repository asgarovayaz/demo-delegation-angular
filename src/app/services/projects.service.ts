import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

export interface IProject {
  id: number;
  code: string;
  name: string;
  country: string;
  startDate: string;
  stage: string;
  status: number;
}

export interface IProjectsResponse {
  data: IProject[];
  status: boolean;
  totalItem: number;
  totalPage: number;
  pageSize: string;
  currentPage: string;
}

@Injectable({ providedIn: 'root' })
export class ProjectService {

  constructor(private http: HttpClient) { }

  getProjects(pageSize: number = 10, currentPage: number = 1, search: string = '', orderBy: string = '') {
    // const url = environment.apiUrl + '/cakes/paging';
    const url = 'https://api.coloredstrategies.com/cakes/paging';
    let params = new HttpParams();
    params = params.append('pageSize', pageSize + '');
    params = params.append('currentPage', currentPage + '');
    params = params.append('search', search);
    params = params.append('orderBy', orderBy);

    return this.http.get(url, { params })
      .pipe(
        map((res: IProjectsResponse) => {
          return res;
        }),
        catchError(errorRes => {
          return throwError(errorRes);
        })
      );

  }
}
