import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {
  products: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://13.232.39.40:5000/api/products')
      .subscribe((data: any) => {
        this.products = data;
      });
  }
}
