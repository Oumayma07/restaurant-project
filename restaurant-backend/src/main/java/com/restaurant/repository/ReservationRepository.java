package com.restaurant.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.restaurant.model.Reservation;

@Repository
public interface ReservationRepository extends MongoRepository<Reservation, String> {

}
