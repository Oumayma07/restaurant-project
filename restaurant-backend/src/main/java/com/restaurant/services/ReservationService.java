package com.restaurant.services;

import com.restaurant.model.Reservation;
import com.restaurant.repository.ReservationRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReservationService {

    private final ReservationRepository reservationRepository;

    public ReservationService(ReservationRepository reservationRepository) {
        this.reservationRepository = reservationRepository;
    }

    // Créer une réservation
    public Reservation createReservation(Reservation reservation) {
        return reservationRepository.save(reservation);
    }

    // Obtenir toutes les réservations
    public List<Reservation> getAllReservations() {
        return reservationRepository.findAll();
    }

    // Obtenir une réservation par ID
    public Optional<Reservation> getReservationById(String id) {
        return reservationRepository.findById(id);
    }
    // 🔹 Retourne toutes les réservations pour une date donnée
    public List<Reservation> getReservationsByDate(String date) {
        return reservationRepository.findByDateReservationStartingWith(date);
    }

    // 🔹 Calculer la disponibilité pour une date
    public int getDisponibilite(String date) {
        int totalPlaces = 50; // capacité totale du restaurant
        List<Reservation> reservations = getReservationsByDate(date);
        int placesReservees = reservations.stream().mapToInt(Reservation::getNbPersonnes).sum();
        return totalPlaces - placesReservees;
    }

    // Mettre à jour une réservation
    public Reservation updateReservation(String id, Reservation reservationDetails) {
        return reservationRepository.findById(id).map(reservation -> {
            reservation.setNom(reservationDetails.getNom());
            reservation.setEmail(reservationDetails.getEmail());
            reservation.setNbPersonnes(reservationDetails.getNbPersonnes());
            reservation.setDateReservation(reservationDetails.getDateReservation());
            reservation.setHeure(reservationDetails.getHeure());
            return reservationRepository.save(reservation);
        }).orElseThrow(() -> new RuntimeException("Réservation non trouvée avec l'id " + id));
    }

    // Supprimer une réservation
    public void deleteReservation(String id) {
        reservationRepository.deleteById(id);
    }
}
