/// <reference types="@angular/localize" />

import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { VenteComponent } from './vente/vente.component';
import { ServiceComponent } from './service/service.component';
import { SouscrireComponent } from './souscrire/souscrire.component';
import { CarouselComponent } from './carousel/carousel.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServiceComponent },
  { path: 'dogs', component:VenteComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', component: CarouselComponent },

  
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)
  ]
});