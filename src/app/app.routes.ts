import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/home/Inicio.component';
import { ProductsComponent } from './pages/products/products.component';
import { MantenimientoComponent } from './pages/mantenimiento/mantenimiento.component';
import { BuscarProductoComponent } from './features/products/components/buscar-producto/buscar-producto.component';



export const routes: Routes = [
{ path: '', component: InicioComponent},
{ path: "inicio", component: InicioComponent},
{path: 'products', component: ProductsComponent},
{path:'mantenimiento', component: MantenimientoComponent},
{path: 'buscar', component: BuscarProductoComponent}
];
