import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditorProductComponent } from './components/editor-product/editor-product.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
  },
  {
    path: 'editProd/:id',
    component: EditorProductComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
