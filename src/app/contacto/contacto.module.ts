import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ContactoRoutingModule } from './contacto-routing.module';
import { ContactoComponent } from './pages/contacto/contacto.component';


@NgModule({
  declarations: [
    ContactoComponent
  ],
  imports: [
    CommonModule,
    ContactoRoutingModule,
    FlexLayoutModule
  ]
})
export class ContactoModule { }
