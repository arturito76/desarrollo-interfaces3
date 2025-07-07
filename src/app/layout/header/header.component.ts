import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { BuscarProductoComponent } from "../../features/products/components/buscar-producto/buscar-producto.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, FormsModule, BuscarProductoComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  termino: string = '';

  constructor(private router: Router) {}

  buscar() {
    if (this.termino.trim() !== '') {
      this.router.navigate(['/buscar'], { queryParams: { q: this.termino } });
    }
  }}
