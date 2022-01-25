import { IProducts } from './../viewmodels/iproducts';
import { ICategory } from './../viewmodels/icategory';
import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-prod-component',
  templateUrl: './add-prod-component.component.html',
  styleUrls: ['./add-prod-component.component.scss']
})
export class AddProdComponentComponent implements OnInit {
  categories: ICategory[];
  constructor(private productService: ProductServiceService,
    private location: Location) {
    this.categories = [{id: 1, name:'category1'},
    {id: 2, name:'category2'}, {id: 3, name:'category3'}]
  }

  addProd(data: any[]): void {
    let [name, qnt, price, imgUrl, catID] = data;
    let id = this.productService.getAllProducts().length;
    this.productService.addProduct({id, name, quantity: qnt, price, img: imgUrl, catID})
    //redirect
    this.location.back();
  }

  ngOnInit(): void {
  }

}
