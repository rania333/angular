import { ICategory } from './../viewmodels/icategory';
import { DiscountOffers } from './../viewmodels/discount-offers';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProducts } from '../viewmodels/iproducts';
import { Store } from '../viewmodels/store';
import { ICartItems } from '../viewmodels/icart-items';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @Input() receivedCatID: number = 0;
  @Input() receviedMinPrice: number =0; //for filter
  //send to cart
  @Output() cartData: EventEmitter<ICartItems>;
  store:Store;
  productList: IProducts[]; //hold array of prods
  displayTable: Boolean = true;
  displayDiv:Boolean = false;
  allProd: IProducts[];
  selectCatID: number = 0;//da ll 2 way binding
  constructor(private productsService: ProductServiceService) {
    this.cartData = new EventEmitter<ICartItems>();
    this.productList = this.productsService.getAllProducts();
    this.allProd = [...this.productList]
    this.store = new Store('product1', ['cairo', 'alex'],
    'https://fakeimg.pl/150x100/');
  }

  decreaseQNT(prod: IProducts): void {
    this.productList.map(p => {
      if(p == prod) {
        p.quantity -= 1;
      }
    })
  }

  increaseQNT(prod: IProducts): void {
    this.productList.map(p => {
      if(p == prod) {
        p.quantity += 1;
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

  ngOnInit(): void {
  }

  handleSelect(): void {

    this.allProd = this.productsService
    .getProdsForSpecificCat(this.receivedCatID);
  }
  sendToCart(data : ICartItems): void {
    this.cartData.emit(data);
  }
  handleFilterByPrice(): void {
    this.productList = this.allProd;
    if(this.receviedMinPrice == 0) {
      this.productList = this.productList;
    } else {
      this.productList = this.productList
    .filter(prod => prod.price >= this.receviedMinPrice);
    }
  }
  updateQnt(prodName: string, qnt: number): void {
    let product = this.productList.find(p => p.name == prodName);
    if(product != undefined) {
      this.productList.map(prod => {
        if(prod.name == prodName) {
          prod.quantity -= qnt;
        }
      })
    }
  }
  ngOnChanges(): void {
    this.handleSelect();
    this.handleFilterByPrice();
  }
}
