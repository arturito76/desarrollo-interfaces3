import { Component, OnInit } from '@angular/core';
import { Product, ProductoService } from '../../../../core/Services/producto.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-buscar-producto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './buscar-producto.component.html',
  styleUrl: './buscar-producto.component.css'
})
export class BuscarProductoComponent implements OnInit {
   productos: Product[] = [];
  resultados: Product[] = [];
  termino: string = '';

  constructor(private route: ActivatedRoute, private productoService: ProductoService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.termino = params['q']?.toLowerCase() || '';
      this.productoService.getProductos().subscribe(data => {
        this.productos = data;
        this.resultados = this.productos.filter(p =>
          p.name.toLowerCase().includes(this.termino)
        );
      });
    });
  }


}
