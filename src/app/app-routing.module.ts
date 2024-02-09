import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { VenteComponent } from '../vente/vente.component';
import { ServiceComponent } from '../service/service.component';
import { SouscrireComponent } from '../souscrire/souscrire.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'vente', component: VenteComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'souscrire', component: SouscrireComponent },
  // Ajoutez d'autres routes au besoin
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
