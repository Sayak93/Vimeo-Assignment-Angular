import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { mappedProductModel } from '../shared/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnChanges {
  @Input() products: Array<mappedProductModel>;
  @Input() buttonColor: string;
  @Output() pushToCart = new EventEmitter<string>();

  public productList: Array<mappedProductModel>;
  public selectedItemsList: Array<mappedProductModel>;
  public searchedProduct: string;
  public showNoMatchMessage: boolean;
  public selected
  constructor() { }

  // on change initialize product list with incoming data and initialize other variables
  ngOnChanges() {
    this.productList = [...this.products];
    this.showNoMatchMessage = false;
    this.selectedItemsList = [];
  }

  // get selected products
  fetchSelectedItems() {
    this.selectedItemsList = this.products.filter((value, index) => {
      return value.isChecked
    });
  }

  // when selection is changed get the new selected times
  changeSelection() {
    this.fetchSelectedItems()
  }

  // search product
  productSearch() {
    // check for null search 
    if (this.searchedProduct && this.searchedProduct !== '') {
      // simple indexOf search
      this.products = this.productList.map((product) => {
        if (product.name.toLocaleLowerCase().indexOf(this.searchedProduct.toLocaleLowerCase()) !== -1) {
          return product;
        }
      });
      // filter out undefined items from product list 
      this.products = this.products.filter((product) => {
        return product !== undefined;
      });

      // checks for no matching product search and displays alert message
      if (this.products.length === 0) {
        this.showNoMatchMessage = true;
      } else {
        this.showNoMatchMessage = false;
      }
    } else {
      // for blank search re initialize the product list
      this.products = this.productList;
      this.showNoMatchMessage = false;
    }
  }

  // when product is added to cart, emit selectedItemsList to parent component
  addToCart() {
    this.pushToCart.emit(JSON.stringify(this.selectedItemsList));
  }

}
