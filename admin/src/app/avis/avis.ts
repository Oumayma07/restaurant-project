import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Contact, ContactService } from '../services/contact.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-avis',
  imports: [CommonModule, FormsModule],
  templateUrl: './avis.html',
  styleUrl: './avis.css',
})
export class Avis implements OnInit {

  avisList: Contact[] = [];

  constructor(private contactService: ContactService , private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.loadAvis();
  }

  loadAvis() {
    this.contactService.getAllAvis().subscribe({
      next: (data) => {
      console.log("avis backend=",data);
      this.avisList = data;
      this.cdr.detectChanges();
    },
    error: (err) => console.error("error",err)
  });
  }

  approve(id: string) {
    this.contactService.approveAvis(id).subscribe(() => this.loadAvis());
  }

  delete(id: string) {
    if (confirm('Supprimer cet avis ?')) {
      this.contactService.deleteContact(id).subscribe(() => this.loadAvis());
    }
  }

}
