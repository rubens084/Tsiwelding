import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { ContactanosComponent } from './pages/contactanos/contactanos.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'clientes', component: ClientesComponent},
      {path: 'contactanos', component: ContactanosComponent},
      {path: 'nosotros', component: NosotrosComponent},
      {path: '**', redirectTo: 'nosotros'}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NosotrosRoutingModule { }
