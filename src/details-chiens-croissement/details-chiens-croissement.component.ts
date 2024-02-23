import { Component,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CHIENS } from '../chiens';
import { Router, RouterModule,ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-details-chiens-croissement',
  standalone: true,
  imports: [CommonModule,RouterModule, NgIf],
  templateUrl: './details-chiens-croissement.component.html',
  styleUrl: './details-chiens-croissement.component.css'
})
export class DetailsChiensCroissementComponent {
  router = inject(Router);
  activeRoute = inject(ActivatedRoute);
  id = Number(this.activeRoute.snapshot.paramMap.get('id'));
  chien=CHIENS.find((i) => i.id === this.id);
  showForm: boolean = false;
}
