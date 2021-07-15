import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() public productName?: string;
  @Input() public productCategory?: string;
  @Input() public productPrice?: number;
  @Input() public tvaPrice?: number;
  @Input() public prodId?: number;
  @Input() public classCategory?: string;


  constructor() { }

  ngOnInit(): void {
  }

}
