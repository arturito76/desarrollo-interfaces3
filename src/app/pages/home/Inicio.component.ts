import { Component } from '@angular/core';
import { HeaderComponent } from "../../layout/header/header.component";
import { FooterComponent } from "../../layout/footer/footer.component";
import { CarruselComponent } from "../../features/products/components/carrusel/carrusel.component";
import { CarruzelHomeComponent } from '../../shared/components/carruzel-home/carruzel-home.component';
import { ListHomeComponent } from '../../features/products/components/list-home/list-home.component';
import { DiversProductsComponent } from '../../shared/components/divers-products/divers-products.component';

@Component({
  selector: 'app-Inicio',
  standalone: true,
  imports: [CarruzelHomeComponent,ListHomeComponent,DiversProductsComponent],
  templateUrl: './Inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
