import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { ContactService } from '../../services/contact.service';


interface ContactForm {
  name: string;
  email: string;
  type: 'AVIS' | 'RECLAMATION' | 'CONTACT';
  rating?: number;
  message: string;
}

@Component({
  selector: 'app-contact',
  imports: [CommonModule, RouterLink, FormsModule, RouterModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

contact: ContactForm = {
    name: '',
    email: '',
    type: 'CONTACT',
    message: ''
  };

  submitted = false;
  success = false;
  error = false;


  constructor(private router: Router,private contactService: ContactService) {}

  onSubmit() {
    this.contactService.submitContact(this.contact).subscribe({
      next: () => {
        this.success = true;
        this.error = false;
        this.submitted = true;
        this.contact = { name: '', email: '', type: 'CONTACT', message: '' };
        setTimeout(() => this.submitted = false, 4000); // popup disparaît après 4s
      },
      error: () => {
        this.error = true;
        this.success = false;
        this.submitted = true;
        setTimeout(() => this.submitted = false, 4000);
      }
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
