package com.restaurant.repository;

import com.restaurant.model.Contact;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ContactRepository extends MongoRepository<Contact, String> {

    List<Contact> findByTypeAndApproved(String type, boolean approved);
    List<Contact> findByType(String type);

}
