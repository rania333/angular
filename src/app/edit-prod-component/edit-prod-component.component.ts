import { IProducts } from './../viewmodels/iproducts';
import { ICategory } from './../viewmodels/icategory';
import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-prod-component',
  templateUrl: './edit-prod-component.component.html',
  styleUrls: ['./edit-prod-component.component.scss']
})
export class EditProdComponentComponent implements OnInit {
  categories: ICategory[];
  product!: IProducts | null ;
  constructor( private activatedRoute: ActivatedRoute,
    private prodSer: ProductServiceService, private location: Location) {
    this.categories = [{id: 1, name:'category1'},
    {id: 2, name:'category2'}, {id: 3, name:'category3'}]
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => {
      let id = Number(param.get('id'));
      let specificProd = this.prodSer.getProdByID(id);
      this.product = specificProd;
    })
  }

  EditProd(data :any[]): void {
    let [name, qnt, price, imgUrl, catID] = data;
    this.activatedRoute.paramMap.subscribe(param => {
      let id2 = Number(param.get('id'));
      this.prodSer.EditProduct
      ( id2, {id: id2, name, quantity: qnt, price, img: imgUrl, catID})
    })
    //redirect
    this.location.back();
  }

  removeProd() : void {

  }

}
