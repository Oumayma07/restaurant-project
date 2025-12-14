import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-connexion',
  imports: [ FormsModule],
  templateUrl: './connexion.html',
  styleUrl: './connexion.css'
})
export class ConnexionComponent {
  connexion = {
    
    email: '',
    mdp : '',
  };

  onSubmit() {
    console.log('Bienvenue  :', this.connexion);
    
  }

}
