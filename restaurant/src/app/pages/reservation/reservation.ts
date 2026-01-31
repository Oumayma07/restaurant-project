import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';  // 🔹 importer Router
import { Reservation, ReservationService } from '../../services/reservation.service';
import { HttpClientModule } from '@angular/common/http';
import { formatISO } from 'date-fns';
import {
  trigger,
  transition,
  style,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule, RouterLink],
  templateUrl: './reservation.html',
  styleUrls: ['./reservation.css'],
  animations: [
    trigger('fadeSlide', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(50px)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class ReservationComponent {
  reservation: Reservation = {
    nom: '',
    email: '',
    nbPersonnes: 1,
    dateReservation: '',
    heure:''
  };

  disponibilite = 0;
  success = false;
  error = false;


  constructor(
    private reservationService: ReservationService,
    private router: Router  // 🔹 injecter Router
  ) {
    if (!localStorage.getItem('token')) {
      this.router.navigate(['/auth/login']);
    }
  }

  // 🔹 Vérifie la disponibilité quand on change la date
  checkDisponibilite() {
    if (!this.reservation.dateReservation) return;
    const dateISO = formatISO(new Date(this.reservation.dateReservation), { representation: 'date' });
    this.reservationService.getDisponibilite(dateISO).subscribe({
      next: (res) => this.disponibilite = res,
      error: () => this.disponibilite = 0
    });
  }

  onSubmit() {
    const dateTimeString = `${this.reservation.dateReservation}T${this.reservation.heure}`;
    const reservationData = {
      nom: this.reservation.nom,
      email: this.reservation.email,
      nbPersonnes: this.reservation.nbPersonnes,
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
