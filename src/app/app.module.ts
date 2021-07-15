import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeadingComponent } from './components/heading/heading.component';
import { ProductComponent } from './components/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './components/products/products.component';
import { TvaService } from './services/tva.service';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { EditorProductComponent } from './components/editor-product/editor-product.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeadingComponent,
    ProductComponent,
    ProductsComponent,
    NavBarComponent,
    EditorProductComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [TvaService],
  bootstrap: [AppComponent],
})
export class AppModule {}
