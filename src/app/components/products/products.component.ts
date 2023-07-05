import { Component, OnInit } from '@angular/core';
import { EProductsService } from 'src/app/services/e-products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(public ps:EProductsService){}
  productData:any
  ngOnInit(): void {
    // this.fetchProductData()
  }


  fetchProductData(){
    this.ps.getProductData().subscribe(
      data =>{ this.productData = data, console.log(data)},
      err => console.log("HTTP ERROR", err),
      () => console.log("HTTP REQUEST ENDED")
    )
  }

}
