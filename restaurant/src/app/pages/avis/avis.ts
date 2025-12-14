import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';


export interface Avis {
  nom: string;
  note: number;
  commentaire: string;
  date: Date;
}

@Component({
  selector: 'app-avis',
  standalone: true,
  templateUrl: './avis.html',
  styleUrl: './avis.css',
  imports: [FormsModule, DatePipe, CommonModule],
})

export class AvisComponent {

  avisList: Avis[] = [
    { nom: 'Sami', note: 5, commentaire: 'Excellent service et plats délicieux !', date: new Date() },
    { nom: 'Leila', note: 4, commentaire: 'Très bon restaurant, juste un peu d’attente.', date: new Date() }
  ];

  newAvis: Avis = { nom: '', note: 0, commentaire: '', date: new Date() };

  ajouterAvis() {
    if (this.newAvis.nom && this.newAvis.note && this.newAvis.commentaire) {
      this.newAvis.date = new Date();
      this.avisList.unshift({ ...this.newAvis });
      this.newAvis = { nom: '', note: 0, commentaire: '', date: new Date() };
      alert('Merci pour votre avis ! 😊');
    } else {
      alert('Veuillez remplir tous les champs.');
    }
  }

}





