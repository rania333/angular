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
  constructor() {
    this.clientName = 'rania';
    this.discount = DiscountOffers.noDiscount;
    this.categories = [{id: 1, name:'category1'},
    {id: 2, name:'category2'}, {id: 3, name:'category3'}]
    this.productList = [
      {id: 1, name: 'product1', quantity: 2,
      price: 100, img: 'https://picsum.photos/300/200/', catID: 2},
      {id: 2, name: 'product2', quantity: 5,
      price: 200, img: 'https://picsum.photos/300/200/', catID: 3},
      {id: 3, name: 'product3', quantity: 4,
      price: 150, img: 'https://picsum.photos/300/200/', catID: 1},
      {id: 4, name: 'product4', quantity: 4,
      price: 150, img: 'https://picsum.photos/300/200/', catID: 1},
      {id: 5, name: 'product5', quantity: 4,
      price: 150, img: 'https://picsum.photos/300/200/', catID: 2}
  ];
    this.allProd = [...this.productList]
    this.store = new Store('product1', ['cairo', 'alex'],
    'https://fakeimg.pl/150x100/');

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
  ngOnInit(): void {
  }

}
