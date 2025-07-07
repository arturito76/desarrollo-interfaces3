import { Component } from '@angular/core';
import { PrductsMantenimientoComponent } from '../../features/products/pages/prducts-mantenimiento/prducts-mantenimiento.component';

@Component({
  selector: 'app-mantenimiento',
  standalone: true,
  imports: [PrductsMantenimientoComponent ],
  templateUrl: './mantenimiento.component.html',
  styleUrl: './mantenimiento.component.css'
})
export class MantenimientoComponent {

}
