import { IProducts } from './../viewmodels/iproducts';
import { ICategory } from './../viewmodels/icategory';
import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-add-prod-component',
  templateUrl: './add-prod-component.component.html',
  styleUrls: ['./add-prod-component.component.scss']
})
export class AddProdComponentComponent implements OnInit {
  categories: ICategory[] =[];
  product: IProducts = {} as IProducts;
  constructor(private productService: ProductServiceService,
    private location: Location, private catService: CategoriesService) {
  }

  addProd(): void {

    this.productService
    .addProduct(this.product)
    .subscribe(prods => {
      alert('added Successfully');
      this.location.back();
    })

    //redirect
    // this.location.back();

  }

  ngOnInit(): void {
    this.catService.getAllCategories().subscribe(data => {
      this.categories = data;
    })

  }

}
