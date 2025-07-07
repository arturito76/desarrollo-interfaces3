import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product, ProductoService } from '../../../../core/Services/producto.service';
declare var bootstrap: any;

@Component({
  selector: 'app-list-by-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-by-category.component.html',
  styleUrl: './list-by-category.component.css'
})
export class ListByCategoryComponent implements OnInit {
  productosPorCategoria: { [categoria: string]: Product[] } = {};
category: any;

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.productoService.getProductos().subscribe(data => {
      this.productosPorCategoria = this.agruparPorCategoria(data);
    });
  }

  agruparPorCategoria(productos: Product[]): { [categoria: string]: Product[] } {
    const agrupados: { [categoria: string]: Product[] } = {};
    for (let producto of productos) {
      const categoria = producto.category || 'Sin categoría';
      if (!agrupados[categoria]) {
        agrupados[categoria] = [];
      }
      agrupados[categoria].push(producto);
    }
    return agrupados;
  }
 

  productosSeleccionados: Product[] = [];

abrirModalPorCategoria(categoria: string): void {
  this.productosSeleccionados = this.productosPorCategoria[categoria] || [];

  const modalElement = document.getElementById('modalActualizar');
  if (modalElement) {
    const modalInstance = bootstrap.Modal.getInstance(modalElement) || new bootstrap.Modal(modalElement);
    modalInstance.show();
  }
}

}
