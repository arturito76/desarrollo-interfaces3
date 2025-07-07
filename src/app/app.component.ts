import { Component } from '@angular/core';



import { LayoutComponent } from './shared/layout/layout.component';
import { ListProductComponent } from "./features/products/components/list-product/list-product.component";
import { ProductsComponent } from './pages/products/products.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LayoutComponent], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
