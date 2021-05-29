import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { Observable } from 'rxjs';
import { productModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<productModel> {
    return this.http.get<productModel>(environment.baseURL + '/getProducts');
  }
}
