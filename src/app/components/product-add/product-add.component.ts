import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductsService} from '../../services/products.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productFormGroup!:FormGroup;
  submited: boolean=false;
  constructor(private fb:FormBuilder,private productService: ProductsService) { }

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
    this.submited=true;
    if(this.productFormGroup?.valid) return;
    this.productService.save(this.productFormGroup.value)
      .subscribe(data=>{
        alert("Success saving product");
      });
  }
}
