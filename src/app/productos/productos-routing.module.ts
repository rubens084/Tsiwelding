import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import {Routes} from '@angular/router'
import { PuertasComponent } from './pages/puertas/puertas.component';
import { VentanasComponent } from './pages/ventanas/ventanas.component';
import { OtrosComponent } from './pages/otros/otros.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'puertas', component: PuertasComponent},
      { path: 'ventanas', component: VentanasComponent},
      { path: 'otros', component: OtrosComponent},
      { path: '**', redirectTo: 'puertas'}
    ]
  }

]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild( routes)
  ]
})
export class ProductosRoutingModule { }
