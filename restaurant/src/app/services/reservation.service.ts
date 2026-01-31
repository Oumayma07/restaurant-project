import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Reservation {
  id?: string;
  nom: string;
  email: string;
  nbPersonnes: number;
  dateReservation: string;
  heure:string; // ISO string
}

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private apiUrl = 'http://localhost:8080/api/reservations';

  constructor(private http: HttpClient) {}

  ajouterReservation(reservation: any): Observable<any> {
    return this.http.post(this.apiUrl, reservation);
  }

  getDisponibilite(date: string): Observable<number> {
  return this.http.get<number>(`${this.apiUrl}/disponibilite?date=${date}`);
}

}
