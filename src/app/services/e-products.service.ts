import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EProductsService {

  productApi = 'https://fakestoreapi.com/products'

  constructor(private http: HttpClient) { }

  getProductData(){
    return this.http.get(this.productApi)

  }
}
