import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Product {
  id?: number; // opcional porque se genera solo
  name: string;
  price: number;
  category?: string;
  description?: string;
  stock: number;
  brand?: string;
  image:string
}

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private baseUrl = 'http://localhost:5000/api/v1/products';
  name: any;
  price: any;

  constructor(private http: HttpClient) { }

  // Obtener todos los productos
  getProductos(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }

  // Obtener un producto por ID
  getProductoById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/${id}`);
  }

  // Crear nuevo producto
  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product);
  }

  // Actualizar producto existente
  actualizarProducto(id: number, producto: Product): Observable<Product> {
    return this.http.put<Product>(`${this.baseUrl}/${id}`, producto);
  }

  // Eliminar producto
  eliminarProducto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
