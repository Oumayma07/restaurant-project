import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/admin.service';

@Component({
  selector: 'app-inscription',
  standalone: true,
  templateUrl: './inscription.html',
  // styleUrls: ['./inscription.css'],
  imports: [FormsModule, CommonModule, RouterModule]
})
export class Inscription {

  admin = {
    nom: '',
    email: '',
    password: ''
  };

  constructor(private adminService: UserService, private router: Router) {}

  onInscription() {
    this.adminService.register(this.admin).subscribe({
      next: () => {
        alert('Compte créé avec succès !');
        this.router.navigate(['/login']); // redirection vers login après inscription
      },
      error: () => {
        alert('Erreur lors de l’inscription !');
      }
    });
  }
}
