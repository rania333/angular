import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../services/product-service.service';
import { IProducts } from '../viewmodels/iproducts';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: IProducts | null = null;
  constructor(private activatedRoute: ActivatedRoute,
    private prodSer:ProductServiceService, private location: Location) {

  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => {
      let id = Number(param.get('id'));
      this.prodSer.getProdByID(id).subscribe(prod => {
        this.product = prod;
      });
    })
  }

  prev() :void {

  }
  back(): void {
    this.location.back();
  }

  nxt() : void {

  }

}
