import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Reservation, ReservationService } from '../services/reservation.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reservations',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reservations.html',
  styleUrls: ['./reservations.css']
})
export class ReservationsComponent implements OnInit {

  reservations: Reservation[] = [];
  error = false;

  constructor(private reservationService: ReservationService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.loadReservations();
  }

  loadReservations() {
    this.reservationService.getAllReservations().subscribe({
      next: (data) => {
      console.log("reservation backend=",data);
      this.reservations = data;
      this.cdr.detectChanges();
    },
    error: (err) => console.error("error",err)
  });
   
  }

  deleteReservation(id: string) {
    if (!id) return;
    if (confirm('Supprimer cette réservation ?')) {
      this.reservationService.deleteReservation(id).subscribe(() => this.loadReservations());
    }
  }

  
}
