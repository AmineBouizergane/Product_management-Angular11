import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../../../model/product.model';
import {ActionEvent, ProductActionsTypes} from '../../../../state/products.state';
import {EventDriverService} from '../../../../state/event.driver.service';

@Component({
  selector: 'app-products-item',
  templateUrl: './products-item.component.html',
  styleUrls: ['./products-item.component.css']
})
export class ProductsItemComponent implements OnInit {

  @Input() product!:Product;
  //@Output() productEventEmitter:EventEmitter<ActionEvent>=new EventEmitter<ActionEvent>();

  constructor(private eventDriverService:EventDriverService) { }

  ngOnInit(): void {
  }

  onSelect(product: Product) {
      this.eventDriverService.publishEvent({type:ProductActionsTypes.SELECT_PRODUCT, payload:product})
  }

  onDelete(product: Product) {
    this.eventDriverService.publishEvent({type:ProductActionsTypes.DELETE_PRODUCT, payload:product})
  }

  onEdit(product: Product) {
    this.eventDriverService.publishEvent({type:ProductActionsTypes.EDIT_PRODUCT, payload:product})
  }
}
