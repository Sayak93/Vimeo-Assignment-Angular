import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { createServer } from "miragejs";
import { mappedProductModel, productModel } from './shared/models/product.model';
import { ProductService } from './shared/services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title: string;
  public buttonColor: string;
  public colorChangerForm: FormGroup;
  public mappedProducts: Array<mappedProductModel>;
  public addedProducts: Array<mappedProductModel>;
  public createServer = createServer;

  constructor(public fb: FormBuilder, public productService: ProductService) { }


  ngOnInit() {
    // initialize form
    this.colorChangerForm = this.fb.group({
      color: ['blue', [Validators.required]]
    });
    // initialize variables
    this.title = 'sayak-chatterjee-may292021';
    this.buttonColor = 'blue';
    this.mappedProducts = [];
    this.addedProducts = [];
    
    // initialize mock server
    this.createServer({
      routes() {
        this.get("/getProducts", () => {
          return {
            products: [
              {
                name: 'Product 1'
              },
              {
                name: 'Product 2'
              },
              {
                name: 'Product 3'
              },
              {
                name: 'Product 4'
              },
              {
                name: 'Product 5'
              },
              {
                name: 'Product 6'
              },
              {
                name: 'Product 7'
              },
              {
                name: 'Product 8'
              },
              {
                name: 'Product 9'
              },
              {
                name: 'Product 10'
              }
            ]
          }
        })
      }
    });
    
    // get products on bootstrap
    this.getProducts();
  }

  // Getter method to access form control
  get myForm() {
    return this.colorChangerForm.get('gender');
  }

  //on selecting a different color
  changeColor() {
    if (this.colorChangerForm.valid) {
      this.buttonColor = this.colorChangerForm.value.color;
    }
  }

  //method to fetch all the products
  getProducts() {
    this.productService.getProducts().subscribe(response => {
      this.productDataMapper(response.products);
    })
  }

  //map product response
  productDataMapper(products){
    this.mappedProducts = products.map(product => {
      return {
        name: product.name,
        isChecked: false
      };
    });
  }

  // on getting products to add to cart
  onPushToCart(addedProducts){
    this.addedProducts = JSON.parse(addedProducts);
  }
}
