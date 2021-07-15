// import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DatasService } from '../../services/datas.service';
import { TvaService } from '../../services/tva.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: any = [];
  tvaPrice: number;

  constructor(
    private DatasService: DatasService,
    public TvaService: TvaService
  ) {
    this.tvaPrice = 0;
  }

  ngOnInit() {
    this.DatasService.getProducts().subscribe((response) => {
      this.products = response;
      console.log(this.products);
    });
  }
  /* --------------------- using service to calculate tva --------------------- */
  calcTva(number: number) {
    return (this.tvaPrice = this.TvaService.frTva(number));
  }
  /* --------------- add dynamic class to get color of category --------------- */
  colorCategory(category: string) {
    switch (category) {
      case "women's clothing":
        return 'womensClothing';
      case "men's clothing":
        return 'mensClothing';
      case 'jewelery':
        return 'jewelery';
      case 'electronics':
        return 'electronics';
      default:
        return;
    }
  }
}
