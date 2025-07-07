import { Component, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product, ProductoService } from '../../../../core/Services/producto.service';
import { PostProductComponent } from '../post-product/post-product.component';

@Component({
  selector: 'app-list-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.css'
})
export class ListProductComponent implements OnInit   {
 
  productos : Product[] = [];
  constructor(private productService : ProductoService){
  }
  
  ngOnInit(): void {
      this.productService.getProductos().subscribe(data =>{
        this.productos= data;
      });
  }
  
   
}
