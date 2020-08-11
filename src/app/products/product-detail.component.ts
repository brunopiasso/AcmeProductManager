import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from './product';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'ProductDetail';
  product: IProduct;
  
  constructor(private route: ActivatedRoute,
              private router: Router) { 
    console.log(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    let id = + this.route.snapshot.paramMap.get('id'); // sign is a javascript shortcut to convert the parameter string to the numeric id
    this.pageTitle += `: ${id}`;
    
    // Call service and retrieve the product
    this.product = {
      "productId": id,
      "productName": "No name",
      "productCode": "No code",
      "releaseDate": "No date",
      "description": "No description",
      "price": 0,
      "starRating": 2,
      "imageUrl": "assets/images/hammer.png"
    }
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }
}
