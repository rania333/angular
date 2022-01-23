import { ICategory } from './../viewmodels/icategory';
import { DiscountOffers } from './../viewmodels/discount-offers';
import { Component, OnInit } from '@angular/core';
import { IProducts } from '../viewmodels/iproducts';
import { Store } from '../viewmodels/store';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  store:Store;
  clientName: string;
  productList: IProducts[];
  discount: DiscountOffers;
  categories: ICategory[];
  displayTable: Boolean = true;
  displayDiv:Boolean = false;
  allProd: IProducts[];
  selectCatID: number = 0;//da ll 2 way binding
  date: Date;
  idNum: number = 29906015986325;
  creditCard: number = 12345698254532;
  constructor() {
    this.clientName = 'rania';
    this.discount = DiscountOffers.noDiscount;
    this.categories = [{id: 1, name:'category1'},
    {id: 2, name:'category2'}, {id: 3, name:'category3'}]
    this.productList = [
      {id: 1, name: 'product1', quantity: 1,
      price: 100, img: 'https://picsum.photos/150/100/', catID: 2},
      {id: 2, name: 'product2', quantity: 5,
      price: 200, img: 'https://picsum.photos/150/100/', catID: 3},
      {id: 3, name: 'product3', quantity: 4,
      price: 150, img: 'https://picsum.photos/150/100/', catID: 1},
      {id: 4, name: 'product4', quantity: 1,
      price: 150, img: 'https://picsum.photos/150/100/', catID: 1},
      {id: 5, name: 'product5', quantity: 4,
      price: 150, img: 'https://picsum.photos/150/100/', catID: 2},
      {id: 6, name: 'product6', quantity: 0,
      price: 150, img: 'https://picsum.photos/150/100/', catID: 2}
  ];
    this.allProd = [...this.productList]
    this.store = new Store('product1', ['cairo', 'alex'],
    'https://fakeimg.pl/150x100/');
    this.date = new Date();
  }

  displayDiscout(): Boolean {
    if(this.discount == 'No Discount') {
      return false
    }
    return true;
  }

  handleSubmit(): void {
    this.displayTable = !this.displayTable;
    this.displayDiv = !this.displayDiv;
  }
  handleSelect(param:any): void {
    this.productList = this.allProd;
    this.productList = this.productList.filter(prod => prod.catID == +param);
  }
  setName(name: any) {
    this.clientName = name;
  }

  decreaseQNT(prod: IProducts): void {
    this.productList.map(p => {
      if(p == prod) {
        p.quantity -= 1;
      }
    })
  }


  getTotalPrice(): number {
    let total: number = 0;
    this.productList.map(p => {
      total += p.price
    })
    return total;
  }

  getProducts(): any {
    this.productList = this.allProd;
    return this.productList = this.productList.filter(p => {
      p.catID == this.selectCatID
    })
  }
  ngOnInit(): void {
  }

}
