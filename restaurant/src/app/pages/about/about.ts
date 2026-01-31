import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [CommonModule, RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {

constructor(private router: Router) {}
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
}
