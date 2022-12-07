import { Component, OnInit } from '@angular/core';
import { Product } from '../core/product';
import { ProductService } from '../services/product.service';
import { CalculService } from '../services/calcul.service';
import { ProductConsumerService } from '../services/product-consumer.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[]=[];
  c!: number;
 constructor(private _productService :ProductService ,private calcul:CalculService,private productConsumer:ProductConsumerService) { }

  ngOnInit(): void {
//initialisation ici
this.products=this._productService.productsList;

/*this.productConsumer.getProducts().subscribe({
  next: (data)=>this.products=data, //code : 200 ,204
  error : (error)=>console.log(error),// code : 500 ,404
  complete : ()=>console.log("I m finshsing")
})*/
}

//fonction qui decremente la quantite a chaque clique sur le boutton buy
//syntaxe ecmascript
  Buy(id:string){
   // this.products.map((product)=>{
    //   if(product.id.match(id)){
    //     product.quantity=product.quantity-1;
    //   }
    // })

    this.products.map((product)=>product.id.match(id)&&product.quantity--)//if...then..
  }

  message () { 
     
    this.c=this.calcul.getNumberOf(this.products,"quantity", 0); 
    
    }

}
