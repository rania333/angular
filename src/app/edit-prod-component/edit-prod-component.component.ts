import { IProducts } from './../viewmodels/iproducts';
import { ICategory } from './../viewmodels/icategory';
import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-edit-prod-component',
  templateUrl: './edit-prod-component.component.html',
  styleUrls: ['./edit-prod-component.component.scss']
})
export class EditProdComponentComponent implements OnInit {
  categories: ICategory[] = [];
  // product!: IProducts | null ;
  product: IProducts = {} as IProducts;

  add: boolean = false
  constructor( private activatedRoute: ActivatedRoute,
    private prodSer: ProductServiceService, private location: Location,
    private catSer: CategoriesService) {
  }

  ngOnInit(): void {
    //categories
    this.catSer.getAllCategories().subscribe(data=>{
      this.categories = data;
    })
    this.activatedRoute.paramMap.subscribe(param => {
      let id = Number(param.get('id'));
      console.log("myid", id);
      if(id == 0) {
        this.add = true;
      } else {
        this.prodSer.getProdByID(id).subscribe(data => {
          this.product = data
        })
      }
    })
  }

  EditProd(): void {
    // let [name, qnt, price, imgUrl, catID] = data;
    this.activatedRoute.paramMap.subscribe(param => {
      let id2 = Number(param.get('id'));
      this.prodSer.EditProduct(id2, this.product)
        .subscribe(data => {
          console.log(data);
              //redirect
              this.location.back();
            })
          })
        }

    addProd(): void {
      this.prodSer
      .addProduct(this.product)
      .subscribe(prods => {
        alert('added Successfully');
        this.location.back();
      })
    }
}
