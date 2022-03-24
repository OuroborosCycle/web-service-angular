import { Component, OnInit } from '@angular/core';
import products_data from '../products.json';

interface Products {
  idProduct: Number;
  productName: String;
  fournisseur: String;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent{

  products: Products[] = products_data;

  isShown = false;
 
  toggleDisplay() {
    this.isShown = !this.isShown;
  }

}
