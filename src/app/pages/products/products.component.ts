import { Component } from '@angular/core';

import { ListProductComponent } from "../../features/products/components/list-product/list-product.component";
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Products_productsComponent } from '../../features/products/pages/products-products/products.component';
import { ListByCategoryComponent } from '../../features/products/components/list-by-category/list-by-category.component';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [Products_productsComponent,ListByCategoryComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

}
