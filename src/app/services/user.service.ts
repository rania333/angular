import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { find, Observable } from 'rxjs';
import { IUser } from '../viewmodels/iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpOption;
  url = 'http://localhost:3000/users';
  constructor(private _httpClient: HttpClient) {
    this.httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  signup(user: IUser): Observable<IUser> {
    return this._httpClient.post<IUser>(`${this.url}`, JSON.stringify(user),
    this.httpOption)
  }

  // existEmail(mail: String): Boolean {
  //   let existEmails= this._httpClient.get<IUser>(`${this.url}`);
  //   existEmails.pipe(find(e => e.email != mail)).
  //   console.log('my mail ', mail , 'and result is ', existEmails)
  //   if(existEmails) {
  //     return true
  //   } else {
  //     return false
  //   }
  // }
  getMails() : Observable<IUser[]> {
    // console.log('from auth service', email);
    // const allMails = this._httpClient.get<IUser[]>(`${this.url}?email=${email}`)
    // return allMails;
    return this._httpClient.get<IUser[]>(this.url)
  }
}
