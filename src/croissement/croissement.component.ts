
import { CommonModule } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { CHIENS } from '../chiens';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-croissement',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './croissement.component.html',
  styleUrl: './croissement.component.css'
})
export class CroissementComponent {
  chiens=CHIENS;
}
