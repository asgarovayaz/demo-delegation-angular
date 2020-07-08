import {
  HttpClient,
  HttpParams
} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { throwError } from 'rxjs';

export interface IProduct {
  id: number;
  title: string;
  img: string;
  category: string;
  status: string;
  statusColor: string;
  description: string;
  sales: number;
  stock: number;
  date: string;
}

export interface IProductResponse {
  data: IProduct[];
  status: boolean;
  totalItem: number;
  totalPage: number;
  pageSize: string;
  currentPage: string;
}

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private http: HttpClient) { }

  getProducts(pageSize: number = 10, currentPage: number = 1, search: string = '', orderBy: string = '') {
    const url = 'https://api.coloredstrategies.com/cakes/paging';
    let params = new HttpParams();
    params = params.append('pageSize', pageSize + '');
    params = params.append('currentPage', currentPage + '');
    params = params.append('search', search);
    params = params.append('orderBy', orderBy);

    return this.http.get(url, { params })
      .pipe(
        map((res: IProductResponse) => {
          return res;
        }),
        catchError(errorRes => {
          return throwError(errorRes);
        })
      );
  }
}
