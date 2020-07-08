import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

import { HotelClasses } from './fake-data/hotelclasses';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface IHotelMain {
  Id: number;
  Name: string;
  HotelClass: string,
  Rooms: number,
  FreeRooms: number;
}

export interface IHotel {
  Id: number;
  Name: string;
  BreakFastTotal: number;
  BreakFastAvailable: number;
  LunchTotal: number;
  LunchAvailable: number;
  DinnerTotal: number;
  DinnerAvailable: number;
}

export interface IHotelClass {
  Id: number;
  Name: string;
}


@Injectable({ providedIn: 'root' })
export class HotelDataService {

  constructor(private http: HttpClient) { }

  getHotelClass(term: string = null): Observable<IHotelClass[]> {
    let items = this.hotelclass;
    if (term) {
      items = items.filter(x => x.Name.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) > -1);
    }
    return of(items).pipe(delay(500));
  }

  public get hotelclass() {
    return HotelClasses.classes;
  }

}

