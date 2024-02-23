/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { VenteComponent } from './vente/vente.component';
import { ServiceComponent } from './service/service.component';
import { DetailsChiensComponent } from './details-chiens/details-chiens.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CroissementComponent } from './croissement/croissement.component';
import { DetailsChiensCroissementComponent } from './details-chiens-croissement/details-chiens-croissement.component';



const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServiceComponent },
  { path: 'vente', component:VenteComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', component: CarouselComponent },
  { path: 'details/:id', component: DetailsChiensComponent },
  { path: 'croissements', component: CroissementComponent },
  { path: 'detailsCroissement/:id', component: DetailsChiensCroissementComponent },

  
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)
  ]
});