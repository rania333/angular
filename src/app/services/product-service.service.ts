import { environment } from './../../environments/environment';
import { IProducts } from './../viewmodels/iproducts';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  httpOption;
  url = 'http://localhost:3000/products';
  constructor(private _httpClient: HttpClient) {
    this.httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  getAllProducts(): Observable<IProducts[]> {
    return this._httpClient.get<IProducts[]>(this.url);
  }
  getProdsForSpecificCat(catID: number): Observable<IProducts[]> {
    if(catID == 0) {
      return this._httpClient.get<IProducts[]>(this.url) ;
    } else {
      let specificProds = this._httpClient
      .get<IProducts[]>(`${this.url}?catID=${catID}`)
      return specificProds;
    }
  }

  getProdByID(prodID: number) : Observable<IProducts> {
    let prod = this._httpClient.get<IProducts>(`http://localhost:3000/products/${prodID}`);
      return prod
  }

  addProduct(prod: IProducts): Observable<IProducts> {
    return this._httpClient.post<IProducts>(`${this.url}`, JSON.stringify(prod),
    this.httpOption)
  }

  EditProduct(prodID: number, newData: IProducts): Observable<IProducts> {
    //if product exist
    return this._httpClient.
    put<IProducts>(`${this.url}/${prodID}`,JSON.stringify(newData),this.httpOption);
  }

  removeProduct(prodID: number) : Observable<IProducts> {
    return this._httpClient.delete<IProducts>(`${this.url}/${prodID}`)
    // this.productList.filter(product => product.id != prodID);
  }


}
