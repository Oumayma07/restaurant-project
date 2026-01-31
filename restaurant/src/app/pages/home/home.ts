import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {
  trigger,
  transition,
  style,
  animate
} from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  imports: [RouterModule, CommonModule],
  animations: [

    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1000ms ease-out', style({ opacity: 1 }))
      ])
    ]),

    trigger('slideUp', [
      transition(':enter', [
        style({ transform: 'translateY(40px)', opacity: 0 }),
        animate('800ms ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
      ])
    ]),

    trigger('cardHover', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.9)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ])

  ]
})
export class HomeComponent {

  specialites = [
    { title: 'Pâtes internationales', image: 'assets/images/pattes1.jpg' },
    { title: 'Cuisine tunisienne', image: 'assets/images/couscous.jpg' },
    { title: 'Grillades & viandes', image: 'assets/images/steak1.webp' },
    { title: 'Desserts gourmands', image: 'assets/images/dessert.jpg' },
    { title: 'Boissons & Mocktails', image: 'assets/images/boissons1.jpg' },
    { title: 'Plats signatures', image: 'assets/images/platsignatures.avif' }
  ];

  isOpen = false;

  constructor(private router: Router) {}

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  closeSidebar() {
    this.isOpen = false;
  }

  goToReservation() {
  const token = localStorage.getItem('token'); // vérifie si l'utilisateur est connecté
  if (!token) {
    // Redirection vers login si pas connecté
    this.router.navigate(['/auth/login']);
  } else {
    // Sinon vers la page réservation
    this.router.navigate(['/reservation']);
  }
}
scrollTo(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}


}
