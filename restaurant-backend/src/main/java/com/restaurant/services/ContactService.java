package com.restaurant.services;

import com.restaurant.model.Contact;
import com.restaurant.repository.ContactRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContactService {

    private final ContactRepository contactRepository;

    public ContactService(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    public Contact saveContact(Contact contact) {
        return contactRepository.save(contact);
    }

    public List<Contact> getApprovedAvis() {
        return contactRepository.findByTypeAndApproved("AVIS", true);
    }

    public List<Contact> getAllContacts() {
        return contactRepository.findAll();
    }

}

