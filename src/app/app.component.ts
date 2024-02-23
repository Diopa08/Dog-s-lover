import { Component } from '@angular/core';
import { DropdownModule } from '@coreui/angular';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { VenteComponent } from '../vente/vente.component';
import { ServiceComponent } from '../service/service.component';
import { SouscrireComponent } from '../souscrire/souscrire.component';
import { ContactComponent } from '../contact/contact.component';
import { AboutComponent } from '../about/about.component';
import { DetailsChiensComponent } from '../details-chiens/details-chiens.component';
import { DetailsChiensCroissementComponent } from '../details-chiens-croissement/details-chiens-croissement.component';





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
     RouterOutlet,
     RouterModule,
     HeaderComponent,
     FooterComponent,
     CarouselComponent,
     VenteComponent,
     DropdownModule,
     ServiceComponent,
     SouscrireComponent,
     ContactComponent,
     AboutComponent,
     DetailsChiensComponent,
     DetailsChiensCroissementComponent
    ],
    
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DogsLover';
}
