import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router,RouterLink } from '@angular/router';
import { Contact, ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact',
  imports: [RouterLink, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class ContactComponent implements OnInit {

  ContactList: Contact[] = [];
  reclamationList: Contact[] = [];

  constructor(private ContactService: ContactService , private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.loadContacts();
    this.loadReclamations();
  }

  loadContacts() {
  this.ContactService.getAllContacts().subscribe({
    next: (contact) => {

      
      this.ContactList = contact.filter(c => c.type === 'CONTACT');

      console.log("CONTACTS =", this.ContactList);
      this.ContactList = contact;
      this.cdr.detectChanges();
    },
    error: (err) => console.error("Erreur contacts", err)
  });
}


  loadReclamations() {
  this.ContactService.getAllContacts().subscribe({
    next: (contacts) => {

      
      this.reclamationList = contacts.filter(c => c.type === 'RECLAMATION');

      console.log("RECLAMATIONS =", this.reclamationList);

      this.cdr.detectChanges();
    },
    error: (err) => console.error("Erreur reclamations", err)
  });
}


  delete(id: string) {
    if(confirm("Supprimer ce message ?")) {
      this.ContactService.deleteContact(id).subscribe(() => {
        this.loadContacts();
        this.loadReclamations();
      });
    }
  }

}
