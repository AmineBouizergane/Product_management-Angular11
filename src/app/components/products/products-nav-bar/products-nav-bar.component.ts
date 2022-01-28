import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActionEvent, ProductActionsTypes} from '../../../state/products.state';
import {EventDriverService} from '../../../state/event.driver.service';

@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.css']
})
export class ProductsNavBarComponent implements OnInit {

  //@Output() productEventEmitter: EventEmitter<ActionEvent> = new EventEmitter();

  constructor(private eventDriverService:EventDriverService) { }

  ngOnInit(): void {
  }

  onGetAllProducts() {
    //this.productEventEmitter.emit({type:ProductActionsTypes.GET_ALL_PRODUCT});
    this.eventDriverService.publishEvent({type:ProductActionsTypes.GET_ALL_PRODUCT});
  }

  onGetSelectedProducts() {
    this.eventDriverService.publishEvent({type:ProductActionsTypes.GET_SLECTED_PRODUCT});
  }

  onGetAvailableProducts() {
    this.eventDriverService.publishEvent({type:ProductActionsTypes.GET_AVAILABLE_PRODUCT});
  }

  onNewProduct() {
    this.eventDriverService.publishEvent({type:ProductActionsTypes.NEW_PRODUCT});
  }

  onSearch(value: any) {
    this.eventDriverService.publishEvent({type:ProductActionsTypes.SEARCH_PRODUCT, payload:value});
  }
}
