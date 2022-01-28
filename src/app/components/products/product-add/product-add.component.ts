import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductsService} from '../../../services/products.service';
import {Router} from '@angular/router';
import {EventDriverService} from '../../../state/event.driver.service';
import {ProductActionsTypes} from '../../../state/products.state';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productFormGroup!:FormGroup;
  submited: boolean=false;
  constructor(private fb:FormBuilder,
              private productService: ProductsService,
              private router:Router,
              private eventDriverService:EventDriverService) { }

  ngOnInit(): void {
    this.productFormGroup=this.fb.group({
      name:["",Validators.required],
      price:[0,Validators.required],
      quantity:[0,Validators.required],
      available:[true,Validators.required],
      selected:[true,Validators.required]
    })
  }

  onSaveProduct() {
    this.productService.save(this.productFormGroup.value)
      .subscribe(data=>{
        this.eventDriverService.publishEvent({type:ProductActionsTypes.PRODUCT_ADDED})
        alert("Success saving product");
      });
  }
}
