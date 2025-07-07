import { Component } from '@angular/core';
import { ListProductComponent } from "../../components/list-product/list-product.component";
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-products-products',
  standalone: true,
  imports: [ListProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class Products_productsComponent {

}
