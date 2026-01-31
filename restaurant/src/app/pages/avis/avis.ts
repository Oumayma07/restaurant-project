import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

import { Contact, ContactService } from '../../services/contact.service';


@Component({
  selector: 'app-avis',
  standalone: true,
  templateUrl: './avis.html',
  styleUrl: './avis.css',
  imports: [FormsModule, RouterLink, CommonModule],
})

export class Avis {
avisList: Contact[] = [];

  constructor(private contactService: ContactService,private router: Router) {}


  ngOnInit(): void {
    this.contactService.getApprovedAvis().subscribe({
      next: (data) => this.avisList = data,
      error: (err) => console.error('Erreur lors du chargement des avis', err)
    });
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

}





