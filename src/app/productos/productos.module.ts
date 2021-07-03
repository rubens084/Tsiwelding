import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PuertasComponent } from './pages/puertas/puertas.component';
import { VentanasComponent } from './pages/ventanas/ventanas.component';
import { OtrosComponent } from './pages/otros/otros.component';
import { ProductosRoutingModule } from './productos-routing.module';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    PuertasComponent,
    
    OtrosComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    FlexLayoutModule,
    MatCarouselModule.forRoot()
  ]
})
export class ProductosModule { }
