import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationService } from '../services/reservation.service';
import { Reservation } from '../models/reservation.model';

@Component({
  selector: 'app-reservations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reservations.html',
  styleUrls: ['./reservations.css']
})
export class ReservationsComponent implements OnInit {

  reservations: Reservation[] = [];

  constructor(private reservationService: ReservationService) {}

  ngOnInit(): void {
    this.chargerReservations();
  }

  chargerReservations() {
    this.reservationService.getAllReservations().subscribe(
      data => {
        this.reservations = data;
        console.log("Données reçues :", data); // Vérifie que les données arrivent
      },
      error => {
        console.error("Erreur de chargement :", error);
      }
    );
  }
}
