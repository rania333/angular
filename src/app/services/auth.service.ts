import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUser } from '../viewmodels/iuser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userName: string = '';
  url = 'http://localhost:3000/users';
  httpOption;

  private isLoggedBehaviour: BehaviorSubject<boolean>;
  private userNameBehaviour: BehaviorSubject<string>;
  constructor(private _httpClient: HttpClient) {
    this.isLoggedBehaviour = new BehaviorSubject<boolean>(this.isLogged());
    this.userNameBehaviour = new BehaviorSubject<string>(this.getUserName());
    //day7
    this.httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  login(userName: string, pass: string) {
    let userToken = '12345';
    this.userName = userName;
    localStorage.setItem('userToken', userToken);
    //l behavour subject
    this.isLoggedBehaviour.next(true);
    this.userNameBehaviour.next(userName);
  }

  getUserName(): string {
    return this.userName;
  }

  logout() {
    this.userName = '';
    localStorage.removeItem('userToken');
    this.isLoggedBehaviour.next(false);
    this.userNameBehaviour.next('');
  }

  isLogged(): boolean {
    let isLogged;
    if(localStorage.getItem('userToken')) {
      isLogged = true;
    } else {
      isLogged = false
    }
    return isLogged;
  }

  getLoggedStatus(): Observable<boolean> {
    return this.isLoggedBehaviour.asObservable();
  }

  getLoggedName(): Observable<string> {
    return this.userNameBehaviour.asObservable();//de 3l4an amn3 yaccess next ..
  }

  signup(user: IUser): Observable<IUser> {
    return this._httpClient.post<IUser>(`${this.url}`, JSON.stringify(user),
    this.httpOption)
  }

  // getMails() : Observable<IUser[]> {
  //   // console.log('from auth service', email);
  //   // const allMails = this._httpClient.get<IUser[]>(`${this.url}?email=${email}`)
  //   // return allMails;
  //   return this._httpClient.get<IUser[]>(this.url)
  // }
}
