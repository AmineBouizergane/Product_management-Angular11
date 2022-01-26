import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductsService} from '../../services/products.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productId:number;
  productFormGroup!:FormGroup;
  submited: boolean=false;
  constructor(private activatedRoute:ActivatedRoute,
              private productService:ProductsService,
              private fb:FormBuilder,
              private router:Router) {
    this.productId=activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.productService.getProduct(this.productId)
      .subscribe(product=>{
        this.productFormGroup=this.fb.group({
          id:[product.id,Validators.required],
          name:[product.name,Validators.required],
          price:[product.price,Validators.required],
          quantity:[product.quantity,Validators.required],
          available:[product.available,Validators.required],
          selected:[product.selected,Validators.required]
        })
      });
  }

  onUpdateProduct() {
    this.productService.update(this.productFormGroup.value)
      .subscribe(data=>{
        alert("Success update product");
        this.router.navigateByUrl("/products");
      });

  }
}
