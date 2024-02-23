import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app/app.component';
import { HeaderComponent } from '../header/header.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { VenteComponent } from '../vente/vente.component';
import { ServiceComponent } from '../service/service.component';
import { DetailsChiensComponent } from '../details-chiens/details-chiens.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { CroissementComponent } from '../croissement/croissement.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServiceComponent },
  { path: 'vente', component:VenteComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', component: CarouselComponent },
  { path: 'details/:id', component: DetailsChiensComponent },
  { path: 'croissements', component: CroissementComponent },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
