import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { CategoriesService } from '../services/categories.service';
import { ICartItems } from '../viewmodels/icart-items';
import { ICategory } from './../viewmodels/icategory';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.scss']
})
export class CartComponentComponent implements OnInit, AfterViewInit {
  categories: ICategory[] = [];
  selectCatID: number= 0; //two way bindng
  products: ICartItems[];
  totalOrderPrice: number = 0;
  minPrice: number = 0 ; //da ll filter
  orderName: string = "";
  orderQnt: number = 0;
  //viewChilds
  @ViewChild(ProductsComponent) prodFromProductsCom !: ProductsComponent;
  constructor(private catService: CategoriesService) {
    // this.categories = [{id: 1, name:'category1'},
    // {id: 2, name:'category2'}, {id: 3, name:'category3'}]
    this.products = [];
  }
  ngAfterViewInit(): void {
    // this.prodFromProductsCom.updateQnt(this.orderName, this.orderQnt);
  }

  onCart(data: ICartItems): void {
    let existProduct = this.products
    .find(prod => prod.productName == data.productName);
    if(existProduct != undefined) {
      this.products.map(p => {
        if(p.productName == existProduct?.productName) {
          p.selectedQuantity += data.selectedQuantity;
        }
      })
    } else {
    this.products.push(data);
    }
  }

  calcTotalPrice(prod: ICartItems, newQnt: number): void {
    this.products.map(currentProduct => {
      if(currentProduct.productName == prod.productName) {
        currentProduct.selectedQuantity = newQnt;
      }
    })
  }
  calcAllOrderPrice(order: ICartItems) : void {
    let totalPricePerItem = order.unitPrice * order.selectedQuantity;
    this.totalOrderPrice += totalPricePerItem;
    //for viewChild
    this.orderName = order.productName;
    this.orderQnt = order.selectedQuantity;

    this.prodFromProductsCom.updateQnt(this.orderName, this.orderQnt);
    this.products = this.products.filter(p => {p.productName != order.productName})
  }
  ngOnInit(): void {
    this.catService.getAllCategories().subscribe(cats => {
      this.categories = cats;
    })
  }
}
