import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatasService } from '../../services/datas.service';
import { TvaService } from '../../services/tva.service';

@Component({
  selector: 'app-editor-product',
  templateUrl: './editor-product.component.html',
  styleUrls: ['./editor-product.component.scss'],
})
export class EditorProductComponent implements OnInit {
  description?: string;
  price?: number;
  title?: string;
  category?: string;
  tvaPrice?: number;
  productImg?: string;
  inputValue?: any;
  products: any = [];
  // appli messages
  error?: any;
  success?: any;
  /* ------------------------------------ . ----------------------------------- */
  constructor(
    private DatasService: DatasService,
    private router: ActivatedRoute,
    public TvaService: TvaService
  ) {}

  ngOnInit(): void {
    this.error = document.getElementById('error');
    this.success = document.getElementById('success');
    this.DatasService.getProducts().subscribe((response) => {
      this.products = response;
      this.description =
        this.products[this.router.snapshot.params.id].description;
      this.category = this.products[this.router.snapshot.params.id].category;
      this.price = this.products[this.router.snapshot.params.id].price;
      this.tvaPrice = this.TvaService.frTva(
        this.products[this.router.snapshot.params.id].price
      );
      this.title = this.products[this.router.snapshot.params.id].title;
      this.productImg = this.products[this.router.snapshot.params.id].image;
    });
  }

  colorCategory(category: any) {
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

  updateProduct() {
    const regex = /^-?\d*(\.\d+)?$/;
    console.log(this.error);
    // this.inputValue == undefined ||
    //   isNaN(this.inputValue) ||
    //   this.inputValue == '';
    console.log(regex.test(this.inputValue));
    if (regex.test(this.inputValue) == false || this.inputValue == '') {
      /* ------------------------------ spawn message ----------------------------- */
      this.error.classList.remove('product__details__error--unactive');
      this.success.classList.remove('product__details__success--active');
      this.success.classList.add('product__details__success--unactive');
      this.error.classList.add('product__details__error--active');
    } else if (regex.test(this.inputValue) == true) {
      this.error.classList.add('product__details__error--unactive');
      this.error.classList.remove('product__details__error--active');
      this.success.classList.add('product__details__success--active');
      this.success.classList.remove('product__details__success--unactive');
      /* ------------------------------------ . ----------------------------------- */
      this.tvaPrice = this.TvaService.frTva(this.inputValue);
      this.price = this.inputValue;
      console.log(typeof this.tvaPrice);
      fetch(
        `https://fakestoreapi.com/products/${this.router.snapshot.params.id}`,
        {
          method: 'PATCH',
          body: JSON.stringify({
            title: this.title,
            price: this.inputValue,
            description: this.description,
            image: this.productImg,
            category: this.category,
          }),
        }
      )
        .then((res) => res.json())
        .then((json) => console.log(json));
      this.inputValue = '';
    }
  }
}
