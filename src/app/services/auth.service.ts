import { BehaviorSubject, Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@delegation/models/';
import { environment } from '@environments/environment';
import { map } from 'rxjs/operators';

export interface ISignInCredentials {
  email: string;
  password: string;
}

export interface ICreateCredentials {
  email: string;
  password: string;
  displayName: string;
}

export interface IPasswordReset {
  code: string;
  newPassword: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('User')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  signIn(credentials : ISignInCredentials) {
    return this.http.post<any>(`${environment.apiUrl}auth/signin`, credentials)
    .pipe(map(user => {
        localStorage.setItem('User', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
    }));
  }

  signOut() {
    localStorage.removeItem('User');
    this.currentUserSubject.next(null);
  }

  register() {

  }

  sendPasswordEmail(email) {

  }

  resetPassword() {
  }

  user() {

  }

}
