import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Product, ProductoService } from '../../../../core/Services/producto.service';

declare var bootstrap: any;

@Component({
  selector: 'app-post-product',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './post-product.component.html',
  styleUrl: './post-product.component.css'
})
export class PostProductComponent implements OnInit {
  formProducto: FormGroup;
  productos: Product[] = [];
  productoSeleccionadoId: number | null = null;
  formActualizar: FormGroup;

  constructor(
    private productoService: ProductoService,
    private fb: FormBuilder
  ) {
    this.formProducto = this.fb.group({
      name: ['', Validators.required],
      price: [null, [Validators.required, Validators.min(0)]],
      stock: [null, [Validators.required, Validators.min(0)]],
      description: [''],
      category: [''],
      brand: [''],
      image: ['']
    });


    
    this.formActualizar = this.fb.group({
      name: ['', Validators.required],
      price: [null, [Validators.required, Validators.min(0)]],
      stock: [null, [Validators.required, Validators.min(0)]],
      description: [''],
      category: [''],
      brand: [''],
      image: ['']
    });
  }

  ngOnInit(): void {
    this.cargarProduct();
  }

  cargarProduct(): void {
    this.productoService.getProductos().subscribe((data: Product[]) => {
      this.productos = data;
    });
  }

  guardarProducto(): void {
    if (this.formProducto.invalid) return;

    const producto = this.formProducto.value;

      this.productoService.addProduct(producto).subscribe(() => {
        alert('Producto registrado con éxito');
        this.formProducto.reset();
        this.cargarProduct();

      });
    }
  

  eliminarproducto(id: number | undefined): void {
    if (id === undefined) return;
    if (confirm('¿Estás seguro de eliminar este producto?')) {
      this.productoService.eliminarProducto(id).subscribe(() => {
        this.cargarProduct();
      });
    }
  }


  abrirModalActualizar(id: number | undefined): void {
    if (id === undefined) return;
    const producto = this.productos.find(p => p.id === id);
    if (!producto) return;

    this.formActualizar.patchValue({
      name: producto.name,
      price: producto.price,
      stock: producto.stock,
      description: producto.description,
      category: producto.category,
      brand: producto.brand,
      image: producto.image
    });

    this.productoSeleccionadoId = producto.id!;


    const modalelement= document.getElementById('modalActualizar');
    if(modalelement){
      const modalInstance= bootstrap.Modal.getInstance(modalelement) || new bootstrap.Modal(modalelement);
      modalInstance.show();
    }
    
  }

  guardarActualizacion(): void {
  if (this.formActualizar.invalid || this.productoSeleccionadoId === null) return;

  const productoActualizado: Product = {
    ...this.formActualizar.value,
    id: this.productoSeleccionadoId
  };

  this.productoService.actualizarProducto(this.productoSeleccionadoId, productoActualizado).subscribe(() => {
    alert('Producto actualizado correctamente');
    this.formActualizar.reset();
    this.productoSeleccionadoId = null;
    this.cargarProduct();

  
    const modalElement = document.getElementById('modalActualizar');
    if (modalElement) {
      const modalInstance = bootstrap.Modal.getInstance(modalElement);
      modalInstance?.hide();
}

  });

  
 
  }}
