import { CommonModule } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { CHIENS } from '../chiens';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-vente',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './vente.component.html',
  styleUrl: './vente.component.css'
})
export class VenteComponent {
  chiens=CHIENS;
  
 
 }

