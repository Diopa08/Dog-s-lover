import { CommonModule } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { NOTES } from '../notes';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-vente',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './vente.component.html',
  styleUrl: './vente.component.css'
})
export class VenteComponent {
  notes=NOTES;
  
 
 }

