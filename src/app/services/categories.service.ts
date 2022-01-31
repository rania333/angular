import { ICategory } from './../viewmodels/icategory';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private _httpClient: HttpClient) {

  }

  getAllCategories(): Observable<ICategory[]> {
    return this._httpClient.get<ICategory[]>('http://localhost:3000/categories');
  }
}
