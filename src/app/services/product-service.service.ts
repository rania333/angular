import { IProducts } from './../viewmodels/iproducts';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  private productList: IProducts[]
  constructor() {
    this.productList = [
      {id: 2, name: 'product2', quantity: 5,
      price: 200, img: 'https://picsum.photos/150/100/', catID: 3},
      {id: 3, name: 'product3', quantity: 4,
      price: 150, img: 'https://picsum.photos/150/100/', catID: 1},
      {id: 5, name: 'product5', quantity: 4,
      price: 150, img: 'https://picsum.photos/150/100/', catID: 2},
      {id: 6, name: 'product6', quantity: 0,
      price: 150, img: 'https://picsum.photos/150/100/', catID: 2}
    ]
  }

  getAllProducts(): IProducts[] {
    return this.productList
  }

  getProdsForSpecificCat(catID: number): IProducts[] {
    if(catID == 0) {
      return this.productList;
    } else {
      let specificProds = this.productList.filter(prod => prod.catID == catID);
      return specificProds;
    }
  }

  getProdByID(prodID: number) : IProducts | null {
    let product = this.productList.find(prod => prod.id == prodID);
    if(product != undefined) {
      return product
    } else {
      return null;
    }
  }

  addProduct(prod: IProducts): void {
    this.productList.push(prod);
  }

  EditProduct(prodID: number, newData: IProducts): void {
    //if product exist
    let productIsExist = this.productList.find(prod => prod.id == prodID);
    if(productIsExist != undefined) {
      this.productList.map(p => {
        if(p.id == prodID) {
          //override values
          p.name = newData.name;
          p.price = newData.price;
          p.quantity = newData.quantity;
          p.catID = newData.catID;
          p.img = newData.img;
        }
      })
    } else {
      alert('product not exist');
    }
  }

  removeProduct(prodID: number) : void {
    this.productList.filter(product => product.id != prodID);
  }


}
