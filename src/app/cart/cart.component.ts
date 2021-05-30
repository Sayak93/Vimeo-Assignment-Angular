import { Component, Input, OnChanges } from '@angular/core';
import { mappedProductModel } from '../shared/models/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnChanges {
  @Input() addedProducts: Array<mappedProductModel>;
  @Input() buttonColor: string;
  public productsInCart: Array<mappedProductModel> = [];
  public numberOfItems: number;
  public showEmptyCartMessage: boolean;

  constructor() { }

  // checks for the incoming products and adds them to the existing added product list
  ngOnChanges(change) {
    if(change.addedProducts && this.addedProducts.length > 0){
      this.productsInCart = this.productsInCart.concat(this.addedProducts);
    }
    this.numberOfItems = this.productsInCart.length;
    this.showEmptyCartMessage = false;
  }

  // on checkout clears the cart and displays empty cart message
  onCheckout(){
    this.productsInCart = [];
    this.showEmptyCartMessage = true;
    this.numberOfItems = 0;
  }

}
