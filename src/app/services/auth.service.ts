import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userName: string = '';
  private isLoggedBehaviour: BehaviorSubject<boolean>;
  private userNameBehaviour: BehaviorSubject<string>;
  constructor() {
    this.isLoggedBehaviour = new BehaviorSubject<boolean>(this.isLogged());
    this.userNameBehaviour = new BehaviorSubject<string>(this.getUserName());
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
}
