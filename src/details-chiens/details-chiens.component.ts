import { Component,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CHIENS } from '../chiens';
import { Router, RouterModule,ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-details-chiens',
  standalone: true,
  imports: [CommonModule,RouterModule, NgIf],
  templateUrl: './details-chiens.component.html',
  styleUrl: './details-chiens.component.css'
})
export class DetailsChiensComponent {
  router = inject(Router);
  activeRoute = inject(ActivatedRoute);
  id = Number(this.activeRoute.snapshot.paramMap.get('id'));
  chien=CHIENS.find((i) => i.id === this.id);
  showForm: boolean = false;
}
