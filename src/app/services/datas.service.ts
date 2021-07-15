import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatasService {
  public url: string = 'https://fakestoreapi.com/products';
  

  constructor(private http: HttpClient) {
  }
  
   getProducts() {
     return  this.http.get(this.url)  
   }
  

   }
  

