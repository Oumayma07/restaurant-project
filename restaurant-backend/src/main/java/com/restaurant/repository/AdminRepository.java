package com.restaurant.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.restaurant.model.Admin;

@Repository
public interface AdminRepository extends MongoRepository<Admin, String> {
    Admin findByEmail(String email);
}
