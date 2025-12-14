import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';  // 🔹 importer Router
import { ReservationService } from '../../services/reservation.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './reservation.html',
  styleUrls: ['./reservation.css']
})
export class ReservationComponent {
  reservation = {
    nom: '',
    email: '',
    date: '',
    heure: '',
    personnes: 1
  };

  constructor(
    private reservationService: ReservationService,
    private router: Router  // 🔹 injecter Router
  ) {}

  onSubmit() {
    const dateTimeString = `${this.reservation.date}T${this.reservation.heure}`;
    const reservationData = {
      nom: this.reservation.nom,
      email: this.reservation.email,
      nbPersonnes: this.reservation.personnes,
      dateReservation: dateTimeString
    };

    this.reservationService.ajouterReservation(reservationData).subscribe({
      next: (res) => {
        console.log('Réponse backend :', res);
        alert('✅ Réservation enregistrée avec succès !');
        this.router.navigate(['/home']);  // 🔹 maintenant ça fonctionnera
      },
      error: (err) => {
        console.error('Erreur backend :', err);
        alert('❌ Erreur lors de la réservation.');
      }
    });
  }
}
