import { Component, OnInit } from '@angular/core';
import { Product, ProductoService } from '../../../../core/Services/producto.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list-home',
  imports: [CommonModule,RouterModule],
  templateUrl: './list-home.component.html',
  styleUrl: './list-home.component.css'
})
export class ListHomeComponent implements OnInit{
   productos : Product[] = [];
    constructor(private productService : ProductoService){
    }
    
    ngOnInit(): void {
        this.productService.getProductos().subscribe(data =>{
          this.productos= data;
        });
    }
    
     

}
