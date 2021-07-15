import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TvaService {
// Tva in FR = 20% =>> price/100*20
  constructor() { }

  frTva(price: any): number {
    /* --------------------------- check type of price -------------------------- */
    price = typeof (price) === typeof (1) ? price : parseFloat(price) ;
    const total: number = price / 100 * 20 + price;
    /* ------------------------- rounded with 2 decimals ------------------------ */
    return Math.floor(total * 100) / 100;
  }
}
