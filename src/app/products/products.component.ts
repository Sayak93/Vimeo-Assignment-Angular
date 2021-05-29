import { Component, Input, OnChanges } from '@angular/core';
import { mappedProductModel } from '../shared/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnChanges { 
  @Input() products: Array<mappedProductModel>;

  constructor() { }

  ngOnChanges() {
    console.log('products', this.products);
    
  }

  selectedItemsList = [];

  fetchSelectedItems() {
    this.selectedItemsList = this.products.filter((value, index) => {
      return value.isChecked
    });

    console.log(this.selectedItemsList);
    
  }

  changeSelection() {
    this.fetchSelectedItems()
  }

}
