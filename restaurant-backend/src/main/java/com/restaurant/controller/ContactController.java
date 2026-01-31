package com.restaurant.controller;

import com.restaurant.model.Contact;
import com.restaurant.repository.ContactRepository;
import com.restaurant.services.ContactService;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "*") // ou ton front Angular
public class ContactController {

    private final ContactService contactService;

    private final ContactRepository contactRepository;
    public ContactController(ContactService contactService ,
                                  ContactRepository contactRepository) {
        this.contactService = contactService;
        this.contactRepository = contactRepository;
    }

    @PostMapping("/submit")
    public Contact submitContact(@RequestBody Contact contact) {
        contact.setApproved(false); // par défaut non approuvé
        return contactService.saveContact(contact);
    }

    @GetMapping("/avis")
    public List<Contact> getApprovedAvis() {
        return contactService.getApprovedAvis();
    }

    @GetMapping("/all")
    public List<Contact> getAllContacts() {
        return contactService.getAllContacts();
    }

    // 🔹 Admin : récupérer seulement les avis
    @GetMapping("/avis1")
    public List<Contact> getAllAvis() {
        return contactRepository.findByType("AVIS");
    }

    // 🔹 Admin : approuver un avis
    @PutMapping("/{id}/approve")
    public Contact approveAvis(@PathVariable String id) {
        Contact contact = contactRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Avis introuvable"));

        contact.setApproved(true);
        return contactRepository.save(contact);
    }

    // 🔹 Admin : supprimer (avis / contact / réclamation)
    @DeleteMapping("/{id}")
    public void deleteContact(@PathVariable String id) {
        contactRepository.deleteById(id);
    }
    
}

