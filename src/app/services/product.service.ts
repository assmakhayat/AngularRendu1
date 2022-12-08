import { Injectable } from '@angular/core';
import { Product } from '../core/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productsList:Product[]=[
  {id:'1',title:'T-shirt 1',quantity:10,price:100,like:0,picture:'https://celio.tn/media/catalog/product/t/h/the-simpsons-t-shirt-blanc-blanc-1115716-7-product_1.jpg'},
  {id:'2',title:'T-shirt 2',quantity:0,price:14,like:0,picture:'https://static.galerieslafayette.com/media/839/83900796/G_83900796_384_VPP_2.jpg'},
  {id:'3',title:'T-shirt 3',quantity:20,price:35,like:0,picture:'https://static.bershka.net/4/photos2/2022/I/0/2/p/2698/987/800/2698987800_2_4_3.jpg?t=1661153423543'}

  ];

  constructor() { }
  addProduct(produc:Product)
  {
    this.productsList.push(produc)

  }




  
}
