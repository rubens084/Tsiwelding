import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ContactoRoutingModule } from './contacto-routing.module';
import { ContactoComponent,  } from './pages/contacto/contacto.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import {MatIconModule} from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from '../app.component';



@NgModule({
  declarations: [
    ContactoComponent,
    
    
  ],
  imports: [
    CommonModule,
    ContactoRoutingModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
     ReactiveFormsModule,
     MatButtonModule,
     HttpClientModule
  


  ]

})



export class ContactoModule {
  
 }
