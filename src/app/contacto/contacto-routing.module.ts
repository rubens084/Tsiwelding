import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactanosComponent } from '../nosotros/pages/contactanos/contactanos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'contacto', component: ContactoComponent},
      {path: '**', redirectTo: 'contacto'}


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactoRoutingModule { }
