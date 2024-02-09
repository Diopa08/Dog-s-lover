import { Component, OnInit } from '@angular/core';
import { CarouselModule } from '@coreui/angular';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CarouselModule,
  CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements OnInit {

  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});

  constructor() { }

  ngOnInit(): void {
    this.slides[0] = {
      id: 0,
      src: 'assets/about-1.jpg',
      title: 'Ventes de chiens',
      subtitle: 'Nous vous fournisons des chiens de race pures'
    };
    this.slides[1] = {
      id: 1,
      src: 'assets/about-2.jpg',
      title: 'Toilettes pour chiens',
      subtitle: 'Votre chiens merite le meilleur'
    }
    this.slides[2] = {
      id: 2,
      src: 'assets/about-3.jpg',
      title: 'Garder votre chien heureux et en forme',
      subtitle: 'Votre chiens merite le meilleur'
    }
  }
}